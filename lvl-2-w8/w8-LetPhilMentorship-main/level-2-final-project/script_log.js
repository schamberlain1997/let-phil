
const exerciseInput = document.getElementById('exerciseInput');
const weightInput = document.getElementById('weightInput');
const repsInput = document.getElementById('repsInput');
const setsInput = document.getElementById('setsInput');
const addBtn = document.getElementById('add-workout-btn');
const clearBtn = document.getElementById('clear-all-btn');
const logTableBody = document.getElementById('logTableBody');

let workouts = JSON.parse(localStorage.getItem("workouts")) || [];
renderWorkouts();

addBtn.addEventListener("click", () => {
    const exercise = exerciseInput.value.trim();
    const weight = weightInput.value.trim();
    const reps = repsInput.value.trim();
    const sets = setsInput.value.trim();

    if (!exercise) {
        alert("Please enter an exercise name!");
        return;
    }

    const newWorkout = {
        id: Date.now(),
        date: new Date().toLocaleDateString(),
        exercise,
        weight: weight || "0",
        reps: reps || "0",
        sets: sets || "0"
    };

    workouts.push(newWorkout);
    saveAndRender();
    
    [exerciseInput, weightInput, repsInput, setsInput].forEach(i => i.value = "");
});

clearBtn.addEventListener("click", () => {
    if (workouts.length === 0) return;
    
    if (confirm("Are you sure you want to delete all entries? This cannot be undone.")) {
        workouts = [];
        saveAndRender();
    }
});

window.deleteWorkout = function(id) {
    workouts = workouts.filter(w => w.id !== id);
    saveAndRender();
};


function saveAndRender() {
    localStorage.setItem("workouts", JSON.stringify(workouts));
    renderWorkouts();
}


function renderWorkouts() {
    if (workouts.length === 0) {
        logTableBody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 30px; color: var(--text-muted);">No workouts logged yet. Time to hit the gym!</td></tr>`;
        return;
    }

    logTableBody.innerHTML = workouts.map(w => `
        <tr>
            <td>${w.date}</td>
            <td style="color: var(--text-main); font-weight: 600;">${w.exercise}</td>
            <td>${w.weight} kg</td>
            <td>${w.reps}</td>
            <td>${w.sets}</td>
            <td>
                <button class="btn-delete" onclick="deleteWorkout(${w.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}