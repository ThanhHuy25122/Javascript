/**
 * INPUT : Họ & tên , tổng thu nhập năm, số người phụ thuộc
 *
 *
 * PROCESS :
 *      1. lấy input : - bảng thuế thu nhập đề cho
 *                     - họ và tên (fullName) , tổng thu nhập (totalSalary) và số người phụ thuộc (numberOfMember) : lấy từ input
 *      2. thu nhập chịu thuế (taxableIncome) = thu nhập năm(totalSalary) - 4000000- số người phụ thuộc(numberOfMember)* 1600000
 *      3. từ bảng thuế thu nhập chịu thuế:
 *                taxableIncome --> taxRate
 *      4. tính thuế thu nhập cá nhân:
 *           tax = taxableIncome * taxRate
 *
 * OUTPUT : Tính và xuất ra thông tin thuế
 *
 *
 */

function calcTax(fullName, totalSalary, numberOfMember) {
  var tax, taxableIncome, taxRate;
  fullName = document.getElementById('txtFullName').value;
  totalSalary = 1000000 * document.getElementById('txtTotalSalary').value;
  numberOfMember = +document.getElementById('txtNumberOfMember').value;
  taxableIncome = totalSalary - 4000000 - numberOfMember * 1600000;
  function calcTaxRate(totalSalary) {
    if (totalSalary <= 60000000) {
      return 0.05;
    } else if (totalSalary <= 120000000) {
      return 0.1;
    } else if (totalSalary <= 210000000) {
      return 0.15;
    } else if (totalSalary <= 384000000) {
      return 0.2;
    } else if (totalSalary <= 624000000) {
      return 0.25;
    } else if (totalSalary <= 960000000) {
      return 0.3;
    } else if (totalSalary > 960000000) {
      return 0.35;
    } else {
      alert(' Nhập sai ');
    }
  }
  taxRate = calcTaxRate(totalSalary);
  tax = taxableIncome * taxRate;
  document.getElementById('answerEx1').innerHTML =
    fullName + 'có thuế thu nhập cá nhân là : ' + tax;
}

/**
 * INPUT :
 *
 *
 * PROCESS
 *
 *
 * OUTPUT
 *
 */
