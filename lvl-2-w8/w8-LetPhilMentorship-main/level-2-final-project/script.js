const exerciseBtn = document.getElementById("exerciseBtn");
const exerciseInput = document.getElementById("exerciseInput");
const exerciseResults = document.getElementById("exerciseResults");

async function searchExercises(query = "", muscleFilter = "") {
    exerciseResults.innerHTML = "<p>Loading exercise data...</p>";

    try {
        const response = await fetch(
            "https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json"
        );
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const allExercises = await response.json();

        const filteredExercises = allExercises.filter((item) => {
            if (muscleFilter) {
                return (item.primaryMuscles && item.primaryMuscles.includes(muscleFilter));
            }
            return item.name && item.name.toLowerCase().includes(query.toLowerCase());
        });

        if (filteredExercises.length === 0) {
            exerciseResults.innerHTML = "<p class='error'>No exercises found!</p>";
            return;
        }

        exerciseResults.innerHTML = "";

        filteredExercises.forEach((exerciseItem) => {
            const imagePath = exerciseItem.images?.[0] 
                ? `https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/exercises/${exerciseItem.images[0]}` 
                : "";

            const instructionsList = exerciseItem.instructions?.length > 0
                ? `<ol>${exerciseItem.instructions.map(step => `<li>${step}</li>`).join("")}</ol>`
                : "<p>No instructions available.</p>";

            const secondaryMuscles = exerciseItem.secondaryMuscles?.length > 0 
                ? exerciseItem.secondaryMuscles.join(", ") 
                : "None";

            exerciseResults.innerHTML += `
                <div class="exercise-card">
                    <h2 class="exercise-title">${exerciseItem.name}</h2>
                    
                    <div class="exercise-meta">
                        <p><strong>Level:</strong> ${exerciseItem.level || 'N/A'}</p>
                        <p><strong>Equipment:</strong> ${exerciseItem.equipment || 'Bodyweight'}</p>
                        <p><strong>Category:</strong> ${exerciseItem.category || 'N/A'}</p>
                        <p><strong>Force:</strong> ${exerciseItem.force || 'N/A'}</p>
                        <p><strong>Mechanic:</strong> ${exerciseItem.mechanic || 'N/A'}</p>
                    </div>

                    <div class="exercise-muscles">
                        <p><strong>Primary:</strong> <span>${exerciseItem.primaryMuscles.join(", ")}</span></p>
                        <p><strong>Secondary:</strong> <span>${secondaryMuscles}</span></p>
                    </div>

                    ${imagePath ? `<img src="${imagePath}" class="exercise-image" alt="${exerciseItem.name}" />` : ""}

                    <div class="exercise-instructions">
                        <strong>Steps to Perform:</strong>
                        ${instructionsList}
                    </div>
                </div>`;
        });

    } catch (error) {
        console.error("Error:", error);
        exerciseResults.innerHTML = "<p>Error fetching data.</p>";
    }
}



exerciseBtn.addEventListener("click", () => {
    const query = exerciseInput.value.trim();
    if (query) searchExercises(query);
});

document.querySelectorAll(".muscle-btn").forEach(button => {
    button.addEventListener("click", () => {
        const muscle = button.getAttribute("data-muscle");
        searchExercises("", muscle);
    });
});