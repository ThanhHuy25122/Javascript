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

function calcTax() {
  var tax, taxableIncome, taxRate;
  var fullName = document.getElementById('txtFullName').value;
  var totalSalary = 1000000 * document.getElementById('txtTotalSalary').value;
  var numberOfMember = +document.getElementById('txtNumberOfMember').value;
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
 *       1. bảng giá cáp của nhà dân và doanh nghiệp
 *       2. mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp.
 *
 *
 * PROCESS :
 *       1. lấy input :
 *            - Phí xứ lý hóa đơn (p1)
 *            - Phí dịch vụ cơ bản (p2), kết nối thêm (p2_1)
 *            - Phí thuê kênh cao cấp (p3)
 *            - Số kênh cao cấp thuê (highLevel)
 *            - Số kết nối  (connection)
 *       2. Xét:
 *          - Doanh nghiệp sổ kết nối hiện
 *          - Nhà dân ẩn ô nhập kết nối
 *       3. Tính Bill
 *           3.1 nhà dân
 *            bill = p1 + p2 + p2_1 * more + p3*highLevel
 *           3.2 doanh nghiệp :
 *             + connection <= 10 : bill = p1 + p2 + p3*highLevel
 *             + connection > 10  : bill = p1 + p2 + p2_1 * (connection - 10 ) + p3 * highLevel
 * OUTPUT :
 *        In ra hóa đơn
 *
 */

function calcBillCable() {
  var bill, p1, p2, p2_1, p3, connection, highLevel, numberHighLevel;
  var inputFamily = document.getElementById('txtFamily');
  var inputCompany = document.getElementById('txtCompany');
  if (inputFamily.checked == true) {
    p1 = 4.5;
    p2 = 20.5;
    p2_1 = 0;
    p3 = 7.5;
    connection = 0;
  } else if (inputCompany.checked == true) {
    p1 = 15;
    p2 = 75;
    p2_1 = 5;
    p3 = 50;
    var connection = +document.getElementById('txtConnection').value;
    if (connection < 0) {
      connection = 0;
    }
  } else {
    return alert('Chọn loại gói');
  }
  var highLevel = document.getElementById('txtHighLevel');
  if (highLevel.checked == false) {
    numberHighLevel = 0;
  } else {
    numberHighLevel = +document.getElementById('txtNumberHighLevel').value;
  }

  if (connection <= 10) {
    bill = p1 + p2 + p3 * numberHighLevel;
  } else {
    bill = p1 + p2 + p2_1 * (connection - 10) + p3 * numberHighLevel;
  }
  document.getElementById('bill').style.display = 'block';
  document.getElementById('priceList').innerHTML = bill + '$';
}

function showNHL() {
  var tx = document.getElementById('txtHighLevel');
  if (tx.checked == true) {
    document.getElementById('txtNumberHighLevel').classList.add('show');
    document.getElementById('txtNumberHighLevel').classList.remove('hide');
    document.getElementById('titleNHL').classList.remove('hide');
    document.getElementById('titleNHL').classList.add('show');
  } else {
    document.getElementById('txtNumberHighLevel').classList.add('hide');
    document.getElementById('txtNumberHighLevel').classList.remove('show');
    document.getElementById('titleNHL').classList.add('hide');
    document.getElementById('titleNHL').classList.remove('show');
  }
}

function showTxtConnection() {
  var tx = document.getElementById('txtCompany');
  if (tx.checked == true) {
    document.getElementById('txtConnection').classList.remove('hide');
    document.getElementById('txtConnection').classList.add('show');
    document.getElementById('titleConnection').classList.remove('hide');
    document.getElementById('titleConnection').classList.add('show');
  }
}

function hideTxtConnection() {
  var tx = document.getElementById('txtFamily');
  if (tx.checked == true) {
    document.getElementById('txtConnection').classList.add('hide');
    document.getElementById('txtConnection').classList.remove('show');
    document.getElementById('titleConnection').classList.add('hide');
    document.getElementById('titleConnection').classList.remove('show');
  }
}
