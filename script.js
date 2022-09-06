// menangkap beberapa element html

let modal = document.getElementById('modal');
let floating_button = document.getElementById('floating_button');
let modal_bg = document.getElementById('modal_bg');
let addlist_form = document.getElementById('addlist_form');
let root = document.getElementById('root');
let subtitle = document.getElementById('subtitle');

// tambah ke data subtitle
subtitle.innerHTML = new Date().toLocaleDateString();

// data list belanja
let data_list_belanja = [];

// menambahkan event listener ke floating button
floating_button.addEventListener('click', () => {
  // atur style pada modal display menjadi flex
  if (modal.style.display == 'none') {
    showModal();
    // modal.style.display = 'flex';
    // floating_button.style.display.backgroundColor = 'gray';
    // floating_button.style.transform = 'rotate(45deg)';
    return;
  }

  // sembunyikan kembali
  hideModal();
  // modal.style.display = 'none';
  // floating_button.style.display.backgroundColor = '#f280b6';
  // floating_button.style.transform = 'rotate(0deg)';
});

// menambahkan event listener ke modal bg
modal_bg.addEventListener('click', () => {
  // sembunyikan kembali
  hideModal();
  // modal.style.display = 'none';
  // floating_button.style.display.backgroundColor = '#f280b6';
  // floating_button.style.transform = 'rotate(0deg)';
});

// tambahkan event listener submit ke addlist form
addlist_form.addEventListener('submit', (event) => {
  // stop form dari reload page
  event.preventDefault();

  // tangkap value dari masing masing input field
  let barang = event.target.barang.value;
  let harga = event.target.harga.value;

  // console.info({
  //   barang, harga,
  // });

  // push data ke data list belanja
  data_list_belanja.push({
    nama_barang: barang,
    harga_barang: harga,
    tanggal: new Date().toLocaleDateString(),
  });

  console.info(data_list_belanja);

  // clear input field
  event.target.barang.value = '';
  event.target.harga.value = '';

  hideModal();
  renderToHTML();
});

// show modal
function showModal() {
  modal.style.display = 'flex';
  floating_button.style.display.backgroundColor = 'gray';
  floating_button.style.transform = 'rotate(45deg)';
}

// hide modal
function hideModal() {
  modal.style.display = 'none';
  floating_button.style.display.backgroundColor = '#f280b6';
  floating_button.style.transform = 'rotate(0deg)';
}

// render function
function renderToHTML() {
  // clear element div
  root.innerHTML = '';

  // perulangan
  data_list_belanja.forEach((e, i) => {
    root.innerHTML += `
    <div class="card">
      <small>${e.tanggal}</small>
      <div>
        ${e.nama_barang} <spam>${e.harga_barang}</span>
      </div>
      <button onclick="handleDelete(${i})">Selesai</button>
    </div>
  `;
  });
}

// function untuk delete item pada array data_list_belanja
function handleDelete(index) {
  data_list_belanja.splice(index, 1);

  renderToHTML();
}
