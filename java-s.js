








$(document).ready(function () {
    
    $('#submit-comment').click(function () {
        const displayName = $('#display-name').val().trim();
        const commentText = $('#comment-text').val().trim();

        if (!displayName || !commentText) {
            alert('Pretty please fill out both fields.');
            return;
        }

        
        const newComment = $(`
            <div class="comment">
                <div class="text">
                    <p>${displayName}</p>
                    <h3>${commentText}</h3>
                </div>
                <div class="actions">
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </div>
        `);

        
        $('.comments').append(newComment);

        
        $('#display-name').val('');
        $('#comment-text').val('');
    });

    
    $(document).on('click', '.delete', function () {
        $(this).closest('.comment').remove();
    });

    
    $(document).on('click', '.edit', function () {
        const comment = $(this).closest('.comment');
        const text = comment.find('p').text();
        const editInput = $(`
            <input type="text" class="edit-input" value="${text}">
            <button class="save">Save</button>
        `);

        
        comment.find('p').replaceWith(editInput);
        $(this).hide(); 
    });

    
    $(document).on('click', '.save', function () {
        const comment = $(this).closest('.comment');
        const newText = comment.find('.edit-input').val();

        
        comment.find('.edit-input').replaceWith(`<p>${newText}</p>`);
        comment.find('.save').remove(); 
        comment.find('.edit').show(); 
    });
});