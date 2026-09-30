/**
 * JavaScript30 - Day 10: Hold Shift and Check Checkboxes
 * 
 * This script enables users to select a range of checkboxes by:
 * 1. Clicking the first checkbox
 * 2. Holding Shift
 * 3. Clicking the last checkbox in the range
 * All checkboxes in between will be automatically checked/unchecked.
 */

/**
 * JavaScript30 - Day 10: Hold Shift and Check Checkboxes
 * 
 * This script enables users to select a range of checkboxes by:
 * 1. Clicking the first checkbox
 * 2. Holding Shift
 * 3. Clicking the last checkbox in the range
 * All checkboxes in between will be automatically checked/unchecked.
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const checkboxContainer = document.getElementById('checkboxes');

    // Generate 10 checkboxes dynamically
    function generateCheckboxes() {
        for (let i = 1; i <= 10; i++) {
            const checkboxItem = document.createElement('div');
            checkboxItem.className = 'checkbox-item';
            
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.id = `checkbox-${i}`;
            
            const label = document.createElement('label');
            label.htmlFor = `checkbox-${i}`;
            label.textContent = `Item ${i}`;
            
            checkboxItem.appendChild(checkbox);
            checkboxItem.appendChild(label);
            checkboxContainer.appendChild(checkboxItem);
        }
    }

    // Generate checkboxes on page load
    generateCheckboxes();

    // Get all checkboxes after generation
    const checkboxes = Array.from(checkboxContainer.querySelectorAll('input[type="checkbox"]'));

    // Track the last checked checkbox
    let lastChecked = null;

    // Handle checkbox click
    function handleCheck(e) {
        // If Shift key is NOT pressed, just update lastChecked
        if (!e.shiftKey) {
            lastChecked = e.target;
            return;
        }

        // If Shift IS pressed and we have a lastChecked
        if (lastChecked && lastChecked !== e.target) {
            // Check if we're checking or unchecking
            const isChecking = e.target.checked;
            
            // Determine the range
            const startIndex = checkboxes.indexOf(lastChecked);
            const endIndex = checkboxes.indexOf(e.target);
            
            const fromIndex = Math.min(startIndex, endIndex);
            const toIndex = Math.max(startIndex, endIndex);
            
            // Loop through checkboxes in the range
            for (let i = fromIndex + 1; i < toIndex; i++) {
                checkboxes[i].checked = isChecking;
            }
        }
        
        // Update lastChecked
        lastChecked = e.target;
    }

    // Add event listener to each checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', handleCheck);
    });
});
