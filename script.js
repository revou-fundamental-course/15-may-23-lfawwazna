document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('calculator-form');
    const luasButton = document.getElementById('hitung-luas');
    const kelilingButton = document.getElementById('hitung-keliling');
    const resetButton = document.getElementById('resetButton');
    const outputLuas = document.getElementById('output_luas');
    const outputKeliling = document.getElementById('output_keliling');
  
    luasButton.addEventListener('click', hitungLuas);
    kelilingButton.addEventListener('click', hitungKeliling);
    resetButton.addEventListener('click', resetForm);
  
    function hitungLuas() {
      const sisi = parseFloat(document.getElementById('sisi').value);
      
      if (isNaN(sisi) || sisi <= 0) {
        outputLuas.textContent = 'Masukkan nilai sisi yang valid.';
      } else {
        const luas = sisi * sisi;
        outputLuas.textContent = 'Luas: ' + luas;
      }
    }
  
    function hitungKeliling() {
      const sisi = parseFloat(document.getElementById('sisi/').value);
      
      if (isNaN(sisi) || sisi <= 0) {
        outputKeliling.textContent = 'Masukkan nilai sisi yang valid.';
      } else {
        const keliling = 4 * sisi;
        outputKeliling.textContent = 'Keliling: ' + keliling;
      }
    }

    function resetForm() {
      form.reset();
      outputLuas.textContent = '';
      outputKeliling.textContent = '';
  }

  });