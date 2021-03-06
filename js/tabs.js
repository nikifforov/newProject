 document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.language-btn').forEach(function(languageBtn) {
    languageBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.catalog-painters__container').forEach(function(catalogMain) {
        catalogMain.classList.remove('catalog-painters__container-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog-painters__container-active')

      document.querySelectorAll('.language-btn').forEach(function(removeActive) {
        removeActive.classList.remove('active-btn')
      })
      document.querySelector(`[data-path="${path}"]`).classList.add('active-btn')

      document.querySelectorAll('.catalog-painters').forEach(function(a) {
        a.classList.remove('catalog-painters-active')
      })
      document.querySelector(`[data-pain="${path}"]`).classList.add('catalog-painters-active')

      document.querySelectorAll('.catalog-painters__link').forEach(function(a) {
        a.classList.remove('catalog-painters__link_active')
      })
      document.querySelector(`[data-link="${path}"]`).classList.add('catalog-painters__link_active')
    })
  })

  let catalogLink = document.querySelectorAll('.catalog-painters__link');
  catalogLink.forEach(function(btn) {
    btn.addEventListener('click', () => {
      catalogLink.forEach(b => b.classList.remove('catalog-painters__link_active'));
      btn.classList.add('catalog-painters__link_active');
    });
  });
});