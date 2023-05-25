const categorySelect = document.getElementById('category-select');
const casasForm = document.getElementById('casas-form');
const carreterasForm = document.getElementById('carreteras-form');
const edificiosForm = document.getElementById('edificios-form');
const puentesForm = document.getElementById('puentes-form');

categorySelect.addEventListener('change', function() {
  const selectedValue = categorySelect.value;

  // Oculta todos los formularios
  casasForm.style.display = 'none';
  carreterasForm.style.display = 'none';
  edificiosForm.style.display = 'none';
  puentesForm.style.display = 'none';

  // Muestra el formulario correspondiente según la opción seleccionada
  if (selectedValue === '1') {
    casasForm.style.display = 'block';
  } else if (selectedValue === '2') {
    carreterasForm.style.display = 'block';
  } else if (selectedValue === '3') {
    edificiosForm.style.display = 'block';
  } else if (selectedValue === '4') {
    puentesForm.style.display = 'block';
  }
});



const checkboxes = document.querySelectorAll('.checkbox-group input[type="checkbox"]');

checkboxes.forEach(function(checkbox) {
  checkbox.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(function(otherCheckbox) {
        if (otherCheckbox !== checkbox) {
          otherCheckbox.disabled = true;
        }
      });
    } else {
      checkboxes.forEach(function(otherCheckbox) {
        otherCheckbox.disabled = false;
      });
    }
  });
});

