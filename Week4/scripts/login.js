function validate() {
    
  document.getElementById('first-name-error').style.visibility = 'hidden';
  document.getElementById('password-error').style.visibility = 'hidden';

  let firstName = document.getElementById('fname').value;
  let password = document.getElementById('password').value;

  console.debug('First name: ' + firstName);

  console.debug('Last name: ' + password);

  if (firstName == '') {
      document.getElementById('first-name-error').style.visibility = 'visible';
  }

  if (password == '') {
      document.getElementById('password-error').style.visibility = 'visible';
  }

  document.cookie = `username=${firstName} ${password}; expires=31 Dec 2024 12:00:00 UTC; path=/`;
}