const renderUserData = ({data}) => {
    document.querySelector(".render-section").innerHTML = "";
    for (let user of data) {
        document.querySelector(".render-section").innerHTML += `
            <div class="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                <div class="card text-bg-dark border-info mb-3">
                    <div class="row g-0 d-flex flex-wrap align-items-center">
                        <div class="col-3">
                            <img src="${user.avatar}" class="align-middle img-fluid rounded-circle" alt="User picture">
                        </div>
                        <div class="col-9">
                            <div class="card-body">
                                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                                <p class="card-text">${user.email}</p>
                                <p class="card-text"><small class="text-white-50 d-flex justify-content-end">ID: ${user.id}</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
};

const renderSpinner = () => {
    document.querySelector(".render-section").innerHTML = `
        <div class="spinner-border text-info justify-content-center" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    `;
}

const getDataFromURL = url => {    
    fetch(url)
        .then(resolve => resolve.json())
        .then(userData => {
            userData.lastFetch = new Date().getTime();
            localStorage.setItem("userData", JSON.stringify(userData));
            renderUserData(userData);
        })
        .catch(error => console.error(error));
    renderSpinner();
};

document.querySelector("#render-button").addEventListener("click", event => {
    const localUserData = JSON.parse(localStorage.getItem("userData"));
    if (localUserData && new Date().getTime() < localUserData.lastFetch + 60000) {
        renderUserData(localUserData);
    } else getDataFromURL("https://reqres.in/api/users?delay=3");
});