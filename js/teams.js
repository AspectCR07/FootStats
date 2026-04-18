document.addEventListener('DOMContentLoaded', function() {
    // Pagination
    const prevButton = document.querySelector('.pagination-btn.prev');
    const nextButton = document.querySelector('.pagination-btn.next');
    const pageNumbers = document.querySelectorAll('.page-number');

    // Add event listeners to pagination
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                const activePage = document.querySelector('.page-number.active');
                const prevPage = activePage.previousElementSibling;
                
                if (prevPage) {
                    activePage.classList.remove('active');
                    prevPage.classList.add('active');
                    updatePaginationState();
                    loadPage(parseInt(prevPage.textContent));
                }
            }
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                const activePage = document.querySelector('.page-number.active');
                const nextPage = activePage.nextElementSibling;
                
                if (nextPage) {
                    activePage.classList.remove('active');
                    nextPage.classList.add('active');
                    updatePaginationState();
                    loadPage(parseInt(nextPage.textContent));
                }
            }
        });
    }

    // Initialize pagination state
    updatePaginationState();

    // Functions
    function loadPage(pageNumber) {
        // For demo purposes, we'll just show a notification
        showNotification(`Loading teams page ${pageNumber}...`, 'info');
        
        // In a real application, you would fetch data for the selected page
        // and update the UI
    }

    function updatePaginationState() {
        const activePage = document.querySelector('.page-number.active');
        const prevButton = document.querySelector('.pagination-btn.prev');
        const nextButton = document.querySelector('.pagination-btn.next');
        
        if (activePage.previousElementSibling) {
            prevButton.classList.remove('disabled');
        } else {
            prevButton.classList.add('disabled');
        }
        
        if (activePage.nextElementSibling) {
            nextButton.classList.remove('disabled');
        } else {
            nextButton.classList.add('disabled');
        }
    }

    function showNotification(message, type) {
        // Create notification element
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        
        // Append to body
        document.body.appendChild(notification);
        
        // Show notification
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, 3000);
    }

    // Add notification styles if not already in CSS
    if (!document.querySelector('#teams-styles')) {
        const style = document.createElement('style');
        style.id = 'teams-styles';
        style.textContent = `
            .notification {
                position: fixed;
                bottom: 20px;
                right: 20px;
                padding: 15px 20px;
                border-radius: 4px;
                color: white;
                font-weight: 500;
                z-index: 1000;
                transform: translateY(100px);
                opacity: 0;
                transition: all 0.3s ease;
                max-width: 300px;
            }
            .notification.show {
                transform: translateY(0);
                opacity: 1;
            }
            .notification.success {
                background-color: #28a745;
            }
            .notification.error {
                background-color: #dc3545;
            }
            .notification.info {
                background-color: #17a2b8;
            }
        `;
        document.head.appendChild(style);
    }
});