


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

    window.onload = function() {
        let currentDate = new Date();
        let options = { year: 'numeric' };
        let formattedDate = currentDate.toLocaleDateString('en-US', options);
        document.getElementById('currentDate').textContent = formattedDate;
    };

    $('.nav-item').on('click', function() {
        let $submenu = $(this).find('.submenu');
        $('.submenu').not($submenu).slideUp(300).removeClass('show');
        $submenu.slideToggle(300).toggleClass('show');
    });

    let sidebar = document.querySelector("#sidebar");
    let start = document.querySelector("#sidebar-start");
    let toggler = document.querySelector("#slides");
    let main = document.querySelector("main");
    let cpbtn = document.querySelector("#collapse-button");

    toggler.addEventListener("click", () => {

        sidebar.classList.toggle("close");
        main.classList.toggle("slide");
        cpbtn.classList.toggle("m-auto");

        start.addEventListener("mouseenter", () => {
            sidebar.classList.remove("close");
            main.classList.remove("slide");
            cpbtn.classList.remove("m-auto");
        });
        start.addEventListener("mouseleave", () => {
            sidebar.classList.toggle("close");
            main.classList.toggle("slide");
            cpbtn.classList.toggle("m-auto");
        });
    });



