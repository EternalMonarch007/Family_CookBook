// Function to add a new row to the table
function addRow() {
    const table = document.getElementById('recipeTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Add editable cells
    const recipeCell = newRow.insertCell(0);
    recipeCell.contentEditable = "true";
    recipeCell.innerText = "New Recipe";

    const ingredientsCell = newRow.insertCell(1);
    ingredientsCell.contentEditable = "true";
    ingredientsCell.innerText = "Ingredients";

    const instructionsCell = newRow.insertCell(2);
    instructionsCell.contentEditable = "true";
    instructionsCell.innerText = "Instructions";

    // Add delete button
    const actionCell = newRow.insertCell(3);
    actionCell.innerHTML = '<button class="button" onclick="deleteRow(this)">Delete</button>';
}

// Function to delete a row
function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Attach the addRow function to the "Add Recipe" button
document.getElementById('addButton').addEventListener('click', addRow);
