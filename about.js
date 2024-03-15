// Fetch data from the API with role parameter set to 'president'
fetch("http://wics-website-backend.vercel.app/api/members/?role=President")
  .then((response) => response.json())
  .then((data) => {
    const presidentsContainer = document.getElementById("presidentsContainer");

    // Iterate through each president and create a profile element
    data.forEach((president) => {
      const profileDiv = document.createElement("div");
      profileDiv.classList.add("container");

      const profile = document.createElement("div");
      profile.classList.add("profile");

      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      // imageDiv.style.backgroundImage = `url('${president.profile_image_url}')`; // Assuming profile_image_url is the URL for the president's profile image

      const nameHeader = document.createElement("h2");
      nameHeader.textContent = president.name;

      // const descriptionParagraph = document.createElement('p');
      // descriptionParagraph.textContent = president.description;

      // Append elements to the profile
      profile.appendChild(imageDiv);
      profile.appendChild(nameHeader);
      // profile.appendChild(descriptionParagraph);

      // Append profile to the container
      profileDiv.appendChild(profile);

      // Append container to presidentsContainer
      presidentsContainer.appendChild(profileDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching presidents:", error);
  });

// Fetch data from the API with role parameter set to 'president'
fetch("http://wics-website-backend.vercel.app/api/members/?limit=100&role=Member")
  .then((response) => response.json())
  .then((data) => {
    const presidentsContainer = document.getElementById("membersContainer");

    // Iterate through each president and create a profile element
    data.forEach((president) => {
      const profileDiv = document.createElement("div");
      profileDiv.classList.add("container");

      const profile = document.createElement("div");
      profile.classList.add("profile");

      const imageDiv = document.createElement('div');
      imageDiv.classList.add('image');
      // imageDiv.style.backgroundImage = `url('${president.profile_image_url}')`; // Assuming profile_image_url is the URL for the president's profile image

      const nameHeader = document.createElement("h2");
      nameHeader.textContent = president.name;

      // const descriptionParagraph = document.createElement('p');
      // descriptionParagraph.textContent = president.description;

      // Append elements to the profile
      profile.appendChild(imageDiv);
      profile.appendChild(nameHeader);
      // profile.appendChild(descriptionParagraph);

      // Append profile to the container
      profileDiv.appendChild(profile);

      // Append container to presidentsContainer
      presidentsContainer.appendChild(profileDiv);
    });
  })
  .catch((error) => {
    console.error("Error fetching presidents:", error);
  });
