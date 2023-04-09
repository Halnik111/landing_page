
const menuContainer = document.getElementById("menu-wrapper");

const menu_about = document.getElementsByClassName("menu-about");
const menu_skills = document.getElementsByClassName("menu-skills");
const menu_projects = document.getElementsByClassName("menu-projects");

const menu_navbar = document.getElementById("menu-navbar");
const menu_dropdown = document.getElementById("dropdown-menu");
const hamburger_top = document.getElementById("hamburger_top");
const hamburger_bottom = document.getElementById("hamburger_bottom");

const gmail_link = document.getElementById("gmail_link");
const phone_link = document.getElementById("phone_link");
const CV_link = document.getElementById("CV_link");
const copy_link_alert = document.getElementById("copy_link_alert");

const skills_content = document.querySelectorAll(".skills_content");
const about_content = document.querySelectorAll(".about_content");
const projects_content = document.querySelectorAll(".project_content");

const waves_svg = document.getElementById("waves");

const hidden_inactive_waves = document.getElementsByClassName("hide_inactive_waves");
const hidden_active_waves = document.getElementsByClassName("hide_active_waves");

const show_inactive_waves = document.getElementsByClassName("show_inactive_waves")
const show_active_waves = document.getElementsByClassName("show_active_waves")

const wave_1 = document.getElementById("wave_1");
const wave_2 = document.getElementById("wave_2");
const wave_3 = document.getElementById("wave_3");
const wave_4 = document.getElementById("wave_4");


gmail_link.onclick = () => {
    navigator.clipboard.writeText("halonikolas@gmail.com")
        .then(() => copy_link_alert.style.display = "block");
    setTimeout(hideCopyAlert, 1000)
}

phone_link.onclick = () => {
    navigator.clipboard.writeText("+421 948 128 774")
             .then(() => copy_link_alert.style.display = "block");
    setTimeout(hideCopyAlert, 1000)
}

CV_link.onclick = () => {

}

const hideCopyAlert = () => {
    copy_link_alert.style.display = "none";
}

let visibleDropdown = false;

menu_navbar.onclick = () => {
    visibleDropdown = !visibleDropdown;
    dropdownSwitch();
};

const dropdownSwitch = () => {
    if (visibleDropdown) {
        hamburger_bottom.style.animation = "hamburgerBottomAnimation forwards 1s ease";
        hamburger_top.style.animation = "hamburgerTopAnimation forwards 1s ease";
        menu_dropdown.style.display = "flex";
    }
    else {
        hamburger_bottom.style.animation = "hamburgerBottomAnimation_reversed forwards 1s ease";
        hamburger_top.style.animation = "hamburgerTopAnimation_reversed forwards 1s ease";
        menu_dropdown.style.display = "none";
    }
}

menuContainer.onmouseover = () => {
    waves_svg.classList.remove("waves_index_0");
    waves_svg.classList.add("waves_index_2")
    Array.from(hidden_inactive_waves).forEach((item, index) => {
        item.classList.add("show_inactive_waves");
        item.style.transition = `800ms ease ${100 * index}ms`
    });

    Array.from(hidden_active_waves).forEach((item, index) => {
        item.classList.add("show_active_waves");
        item.style.transition = `800ms ease ${100 * index}ms`
    })
}

menuContainer.onmouseleave = () => {
    waves_svg.classList.add("waves_index_0");
    Array.from(show_inactive_waves).forEach(item => {
        item.classList.remove("show_inactive_waves");
        item.classList.add("hide_inactive_waves")
    });

    Array.from(show_active_waves).forEach(item => {

        item.classList.add("hide_active_waves")
        item.classList.remove("show_active_waves");
    })
}

Array.from(menu_about).forEach(item => {
    item.onclick = () => {
        console.log("about")
        visibleDropdown = false;
        dropdownSwitch();
        aboutPageLoad();
    }
})

Array.from(menu_skills).forEach(item => {
    item.onclick = () => {
        console.log("skills")
        visibleDropdown = false;
        dropdownSwitch();
        skillsPageLoad();
    }
})

Array.from(menu_projects).forEach(item => {
    item.onclick = () => {
        console.log("project")
        visibleDropdown = false;
        dropdownSwitch();
        projectPageLoad();
    }
})

const aboutPageLoad = () => {
    const shown_content = document.querySelectorAll(".show_content");

    wave_2.classList.remove("show_active_waves")
    wave_2.classList.remove("hide_active_waves")
    wave_3.classList.remove("show_active_waves")
    wave_3.classList.remove("hide_active_waves")

    wave_1.classList.remove("hide_inactive_waves")
    wave_1.classList.add("show_active_waves");

    shown_content.forEach(item => {
        item.classList.remove("show_content");
        item.classList.add("hide_content");
    });

    about_content.forEach(item => {
        item.classList.remove("hide_content")
        item.classList.add("show_content")
    })
}

const skillsPageLoad = () => {
    const shown_content = document.querySelectorAll(".show_content");

    wave_3.classList.remove("show_active_waves")
    wave_3.classList.remove("hide_active_waves")

    wave_1.classList.remove("hide_inactive_waves")
    wave_1.classList.add("show_active_waves");
    wave_2.classList.remove("hide_inactive_waves")
    wave_2.classList.add("show_active_waves");

    shown_content.forEach(item => {
        item.classList.remove("show_content");
        item.classList.add("hide_content")
    });

    skills_content.forEach(element => {
        element.classList.remove("hide_content")
        element.classList.add("show_content")
    })
}

const projectPageLoad = () => {
    const shown_content = document.querySelectorAll(".show_content");

    wave_1.classList.remove("hide_inactive_waves")
    wave_1.classList.add("show_active_waves");
    wave_2.classList.remove("hide_inactive_waves")
    wave_2.classList.add("show_active_waves");
    wave_3.classList.remove("hide_inactive_waves")
    wave_3.classList.add("show_active_waves");

    shown_content.forEach(item => {
        item.classList.remove("show_content");
        item.classList.add("hide_content")
    });

    projects_content.forEach(item => {
        item.classList.remove("hide_content")
        item.classList.add("show_content")
    })
}