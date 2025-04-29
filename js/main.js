function toggleLogoutMenu() {
  const menu = document.getElementById('logoutMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

function logout() {
  alert("خروج انجام شد!");
}

function loadPage(page) {
  const content = document.getElementById('content');
  switch(page) {
    case 'dashboard':
      content.innerHTML = `
        <div class="dashboard-icons">
          <div class="icon" onclick="loadPage('add-employee')">افزودن پرسنل</div>
          <div class="icon" onclick="loadPage('documents')">بارگذاری مدارک</div>
          <div class="icon" onclick="loadPage('children')">فرزندان پرسنل</div>
          <div class="icon" onclick="loadPage('financial')">اطلاعات مالی</div>
          <div class="icon" onclick="loadPage('contact')">اطلاعات تماس</div>
        </div>
      `;
      break;
    case 'add-employee':
      content.innerHTML = `
        <h2>افزودن پرسنل</h2>
        <form>
          <label>نام</label><input type="text">
          <label>نام خانوادگی</label><input type="text">
          <label>تاریخ تولد</label><input class="datepicker" type="text">
          <button type="submit">ثبت</button>
        </form>
      `;
      $('.datepicker').persianDatepicker({ format: 'YYYY/MM/DD' });
      break;
    case 'documents':
      content.innerHTML = `
        <h2>بارگذاری مدارک</h2>
        <input type="file">
      `;
      break;
    case 'children':
      content.innerHTML = `
        <h2>اطلاعات فرزندان</h2>
        <label>تعداد فرزندان</label><input type="number" id="childrenCount" onchange="generateChildrenFields()">
        <div id="childrenInfo"></div>
      `;
      break;
    case 'financial':
      content.innerHTML = `
        <h2>اطلاعات مالی</h2>
        <label>شماره شبا</label><input type="text">
        <label>شماره کارت</label><input type="text">
      `;
      break;
    case 'contact':
      content.innerHTML = `
        <h2>اطلاعات تماس</h2>
        <label>شماره موبایل</label><input type="text">
        <label>ایمیل</label><input type="text">
        <label>لینک شبکه اجتماعی</label><input type="text">
      `;
      break;
  }
}

function generateChildrenFields() {
  const count = document.getElementById('childrenCount').value;
  const container = document.getElementById('childrenInfo');
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    container.innerHTML += `
      <div>
        <label>نام فرزند ${i+1}</label><input type="text">
        <label>تاریخ تولد</label><input class="datepicker" type="text">
      </div>
    `;
  }
  $('.datepicker').persianDatepicker({ format: 'YYYY/MM/DD' });
}
