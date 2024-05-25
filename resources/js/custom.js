


    // Example usage of SweetAlert2
    function fire() {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    }

    // sentence conversion function
    // window.onload = function() {
    //     function toSentenceCase(text) {
    //         let sentences = text.split('. ');
    //         for (let i = 0; i < sentences.length; i++) {
    //             let sentence = sentences[i].trim();
    //             sentences[i] = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    //         }
    //         return sentences.join('. ');
    //     }
    //     let inputElement = document.getElementById('sentence');
    //     let inputText = inputElement.textContent;
    //     let outputText = toSentenceCase(inputText);
    //     inputElement.innerHTML = outputText;
    // };

    window.onload = function() {
        let currentDate = new Date();
        let options = { year: 'numeric' };
        let formattedDate = currentDate.toLocaleDateString('en-US', options);
        document.getElementById('currentDate').textContent = formattedDate;
    };

    $('.nav-item').on('click', function() {
        let submenu = $(this).find('.submenu');
        $(this).find('.has-submenu').toggleClass('toggled');
        $('.submenu').not(submenu).slideUp(300).removeClass('show');
        submenu.slideToggle(300).toggleClass('show');
    });

    let sidebar = document.querySelector("#sidebar");
    let header = document.querySelector(".main-header");
    let footer = document.querySelector(".main-footer");
    let start = document.querySelector("#sidebar-start");
    let toggler = document.querySelector("#slides");
    let main = document.querySelector("main");
    let cpbtn = document.querySelector("#collapse-button");

    toggler.addEventListener("click", () => {

        sidebar.classList.toggle("close");
        header.classList.toggle("slide");
        footer.classList.toggle("slide");
        main.classList.toggle("slide");
        cpbtn.classList.toggle("m-auto");

        start.addEventListener("mouseenter", () => {
            sidebar.classList.remove("close");
            header.classList.toggle("slide");
            footer.classList.toggle("slide");
            main.classList.remove("slide");
            cpbtn.classList.remove("m-auto");
        });
        start.addEventListener("mouseleave", () => {
            sidebar.classList.toggle("close");
            header.classList.toggle("slide");
            footer.classList.toggle("slide");
            main.classList.toggle("slide");
            cpbtn.classList.toggle("m-auto");
        });
    });

    $(document).ready(function () {
        // Prevent closing main dropdown when clicking on nested dropdown
        $(".dropdown-menu .dropdown-menu").on("click", function (e) {
            e.stopPropagation();
        });

        // Close main dropdown when clicking outside of it
        $(document).click(function (e) {
            if (!$(e.target).closest(".dropdown").length) {
                $(".dropdown-menu").removeClass("show");
            }
        });

        // Handle click on links inside main dropdown
        $(".dropdown-menu a, dropdown-menu a.dropdown-item").on(
            "click",
            function () {
                $(".dropdown-menu").removeClass("show");
            }
        );

        // for handling select2 
        $('.select2').select2();

        // for handling icon labels
        $('.label').on('click', function() {
            $(this).next('input').focus();
        });

    });


    // function autoExpand(textarea) {
    //     // Reset the textarea's height to fit one line of text
    //     textarea.style.height = '1em';

    //     // Calculate the scroll height of the textarea
    //     var scrollHeight = textarea.scrollHeight;

    //     // Set the textarea's height to fit the content if it's taller than one line
    //     if (scrollHeight > textarea.clientHeight) {
    //         textarea.style.height = scrollHeight + 'px';
    //     }
    // }

    function autoExpand(textarea) {
        var scrollTop = textarea.scrollTop;
    
        textarea.style.height = 'auto';
        textarea.style.height = Math.min(textarea.scrollHeight, 100) + 'px';
    
        var scrollDiff = textarea.scrollHeight - textarea.clientHeight;
    
        if (scrollDiff > 0 && scrollTop === 0) {
            textarea.scrollTop = scrollDiff;
        }
    }

    $('#writeMsg').on('click',function() {
        var lines = textarea.value.split('\n');
        lines.reverse();
        textarea.value = lines.join('\n');
    });

    $(document).on('click', '.show_pass', function(e) {
        let $container = $(this).closest('.input-group');
        let $passwordField = $container.find('input');
        let $iconField = $(this);
    
        if ($passwordField.length) {
            if ($passwordField.attr('type') === 'password') {
                $passwordField.attr('type', 'text');
            } else {
                $passwordField.attr('type', 'password');
            }
        }
    
        if ($iconField.hasClass('fi-sr-eye')) {
            $iconField.removeClass('fi-sr-eye').addClass('fi-sr-eye-crossed');
        } else {
            $iconField.removeClass('fi-sr-eye-crossed').addClass('fi-sr-eye');
        }
    });

    



