export const ogTemplate = ({
  username,
  title,
  optionsLength
}: any) => `<div style="background:#000;color:#fff;padding:3rem;padding-bottom:1rem;width:550px">
<div style="display:flex; align-items:center">
  <img src="https://votely.vercel.app/_next/image?url=%2Fjojo.jpg&w=96&q=75" style="border-radius:100%;width:3rem; margin-right:0.5rem" />
  <span style="font-size:1.1rem; font-weight:500">${username}</span>
</div>
<h1 class="title">${title}</h1>
<div style="display:flex; align-items:center;margin-bottom:3rem">
  <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.55688 9.5C3.55688 5.97918 6.41107 3.125 9.93188 3.125C13.4527 3.125 16.3069 5.97918 16.3069 9.5C16.3069 13.0208 13.4527 15.875 9.93188 15.875C6.41107 15.875 3.55688 13.0208 3.55688 9.5ZM9.93188 1.625C5.58264 1.625 2.05688 5.15076 2.05688 9.5C2.05688 13.8492 5.58264 17.375 9.93188 17.375C14.2811 17.375 17.8069 13.8492 17.8069 9.5C17.8069 5.15076 14.2811 1.625 9.93188 1.625ZM13.6289 7.65533C13.9218 7.36244 13.9218 6.88756 13.6289 6.59467C13.336 6.30178 12.8611 6.30178 12.5682 6.59467L9.14022 10.0227L8.08721 8.96967C7.79432 8.67678 7.31945 8.67678 7.02655 8.96967C6.73366 9.26256 6.73366 9.73744 7.02655 10.0303L8.60989 11.6137C8.90278 11.9066 9.37766 11.9066 9.67055 11.6137L13.6289 7.65533Z" fill="white"/>
</svg>
  <span style="margin-left:0.5rem">${optionsLength} Options</span>
</div>
<h1>VOTLY</h1>
</div>


<link           href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
rel="stylesheet">`;
