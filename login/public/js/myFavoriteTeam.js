const newFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#team-name').value.trim();
  const description = document.querySelector('#team-desc').value.trim();
  const away_team_name = document.querySelector('#away-team-name').value.trim();
  const home_team_name = document.querySelector('#home-team-name').value.trim();
  const image = document.querySelector('#team-image').value.trim();

  if (name && away_team_name && home_team_name && image && description) {
    const response = await fetch(`/api/projects`, {
      method: 'POST',
      body: JSON.stringify({ name, away_team_name, home_team_name, image, description }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/myFavoriteTeam');
    } else {
      alert('Failed to save team');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/teams/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/myFavoriteTeam');
    } else {
      alert('Failed to delete team');
    }
  }
};

document
  .querySelector('.new-team-form')
  .addEventListener('submit', newFormHandler);

document
  .querySelector('.team-list')
  .addEventListener('click', delButtonHandler);
