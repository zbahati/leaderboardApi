const fetchdata = async (event) => {
  try {
    const form = document.getElementById('form');
    const key = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/AOX5lFiBGXXRnzsT2I1a/scores';
    event.preventDefault();
    const formData = new FormData(form);
    const destructedFormData = [...formData];
    const destructedName = destructedFormData[0][1];
    const destructedScore = destructedFormData[1][1];
    const destructedObject = {
      user: destructedName,
      score: destructedScore,
    };

    const response = await fetch(key, {
      method: 'POST',
      headers: { 'content-Type': 'application/json' },
      body: JSON.stringify(destructedObject),
    });

    await response.json();
  } catch (error) {
    alert.error(error);
  }
};

export default fetchdata;