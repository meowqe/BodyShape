const anchors = document.querySelectorAll('a[href*="#"]')
		for (let anchor of anchors) {
			anchor.addEventListener('click', function (e) {
				e.preventDefault()

				const blockID = anchor.getAttribute('href').substr(1)

				document.getElementById(blockID).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				})
			})
		}

		document.addEventListener('DOMContentLoaded', function () {
			const modal = document.getElementById('beast-modal');
			const openBtn = document.querySelector('.open-modal-btn');
			const closeBtn = modal.querySelector('.modal__close');
			const overlay = modal.querySelector('.modal__overlay');
			const form = document.getElementById('beast-form');

			openBtn.addEventListener('click', function (e) {
				e.preventDefault();
				modal.classList.add('active');
				document.body.style.overflow = 'hidden';
			});

			function closeModal() {
				modal.classList.remove('active');
				document.body.style.overflow = '';
			}

			closeBtn.addEventListener('click', closeModal);
			overlay.addEventListener('click', closeModal);

			
			document.addEventListener('keydown', function (e) {
				if (e.key === 'Escape' && modal.classList.contains('active')) {
					closeModal();
				}
			});

        successCloseBtn.addEventListener('click', closeModal);

    });


		