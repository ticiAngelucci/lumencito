export class Modal {
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.element = this.createElement();
        this.isOpen = false;
    }

    createElement() {
        const modal = document.createElement('div');
        modal.id = this.id;
        modal.className = 'fixed inset-0 z-50 hidden modal-backdrop';
        modal.innerHTML = `
            <div class="flex items-center justify-center min-h-screen p-4">
                <div class="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                    <div class="bg-gradient-to-r from-lumen-orange to-lumen-red text-white p-6">
                        <div class="flex justify-between items-center">
                            <h3 class="text-2xl font-bold">${this.title}</h3>
                            <button class="close-modal text-white/80 hover:text-white text-2xl">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                    <div class="modal-content p-6 overflow-y-auto" style="max-height: calc(90vh - 180px);">
                        <!-- Content will be added by subclasses -->
                    </div>
                </div>
            </div>
        `;

        this.addEventListeners(modal);
        return modal;
    }

    addEventListeners(modal) {
        const closeBtn = modal.querySelector('.close-modal');
        closeBtn.addEventListener('click', () => this.close());

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.close();
            }
        });
    }

    open() {
        this.element.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
        this.isOpen = true;