const buttons = document.querySelectorAll('.logos p button');

const copyTextToClipboard = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Text copied to clipboard');
  } catch (err) {
    console.error('Error in copying text: ', err);
  }
};

const changeButtonToCopied = (button) => button.classList.add('copied');

const copyUrl = async (event) => {
  event.preventDefaut;
  const element = event.target;
  const textToCopy = element.innerText;
  await copyTextToClipboard(textToCopy);
  changeButtonToCopied(element);
};

buttons.forEach((button) => button.addEventListener('click', copyUrl));
