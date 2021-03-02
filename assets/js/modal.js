var modals = qsa("[data-modal]");
var modalOverlay = qs('#modal-overlay');

if (modals) {

    modalOverlay.onclick = function () {
        modalOverlay.classList.remove('open');
        modals.forEach(mod => mod.style.display = "none");
    }

    modals.forEach(function (modal) {
        modal.style.display="none";
        var close_btn = document.createElement("div");
        close_btn.classList.add('close-btn');
        close_btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/></svg>';
        close_btn.addEventListener("click", function(){
            modalOverlay.classList.remove('open');
            modal.style.display="none";
        })
        modal.appendChild(close_btn);
        var name = modal.dataset.modal;
        var triggers = qsa('[data-modal-trigger="' + name+ '"');
        triggers.forEach(function (trigger) {
            trigger.onclick = function () {

                modalOverlay.classList.add('open');
                modal.style.display = "block";
            }
        });
    });

} 