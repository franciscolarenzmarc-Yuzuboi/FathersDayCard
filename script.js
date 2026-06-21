const card = document.getElementById('card');
        const cardContainer = document.getElementById('cardContainer');
        const messageInput = document.getElementById('messageInput');

        // Click to open/close card
        cardContainer.addEventListener('click', function() {
            card.classList.toggle('open');
        });

        // Prevent input clicks from opening/closing card
        messageInput.addEventListener('click', function(e) {
            e.stopPropagation();
        });

        // Store photos in an array
        const photos = [null, null, null];

        // Add photo function
        function addPhoto(index) {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.onchange = function(e) {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onload = function(event) {
                    photos[index] = event.target.result;
                    const photoId = `photo${index + 1}`;
                    const photoElement = document.getElementById(photoId);
                    photoElement.innerHTML = `<img src="${event.target.result}" alt="Dad photo">`;
                };
                reader.readAsDataURL(file);
            };
            input.click();
        }

        // Update custom message
        function updateMessage() {
            const newMessage = messageInput.value.trim();
            if (newMessage) {
                document.getElementById('customMessage').textContent = newMessage;
                messageInput.value = '';
            }
        }

        // Allow Enter key to update message
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                updateMessage();
            }
        });