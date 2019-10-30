// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const SVGIcon = ({ c1, c2, c3 }) => <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M74.5931 13.7028L61.9154 0.474278C61.3486 -0.118379 60.4049 -0.139331 59.8123 0.4271L50.6985 9.12708C50.1945 9.6311 50.0857 10.4259 50.4874 11.0278C50.6761 11.3106 50.9541 11.548 51.188 11.7921L49.6939 13.2175C48.4731 12.8525 47.1537 12.9078 45.935 13.2512C43.6441 13.8966 41.9662 15.4636 40.2496 17.0242C38.5765 15.5512 36.6325 14.3552 34.6672 13.619C31.4169 12.4013 28.2471 12.4631 25.444 13.7872L23.9186 12.1882C24.5193 11.6126 25.152 10.9988 24.7924 10.0794C24.6742 9.77688 16.1122 0.817273 15.8607 0.558818C15.2677 -0.0501029 14.3316 -0.19867 13.6773 0.428272L6.11572 7.67481C5.0926 8.65545 6.61314 10.2419 7.63641 9.26158L14.6833 2.50822L22.4038 10.5958L10.1999 22.2904L2.47992 14.2033L4.22595 12.5301C5.24908 11.5494 3.72868 9.96281 2.70526 10.9433L0.448914 13.1059C-0.181984 13.7091 -0.114733 14.64 0.444519 15.2541C0.624734 15.452 9.11915 24.3753 9.35182 24.5319C9.88661 24.8918 10.6081 24.8541 11.1103 24.4544C11.3443 24.2682 11.5507 24.0399 11.7664 23.8333L13.1919 25.3275C12.7621 26.7643 12.4483 29.9803 16.1532 33.8638C16.6395 34.3736 21.5324 39.4701 21.8517 39.7992C21.4363 40.4178 21.1802 41.1803 21.1322 42.0003C20.9508 45.0565 21.5828 48.3284 22.8665 50.9769C24.3798 54.0995 26.7191 56.2436 29.6653 57.2233V59.4261L28.9488 59.4265C28.1396 59.4265 27.4602 60.1043 27.4611 60.9142L27.4649 73.4986C27.4655 74.3183 28.1326 74.9846 28.9523 74.9846C28.9526 74.9846 28.953 74.9846 28.9533 74.9846L39.1103 74.9782C40.5249 74.9771 40.5242 72.7804 39.1088 72.7804L29.6625 72.7864L29.6591 61.6238L46.5883 61.6137L46.5917 72.7756L44.3833 72.7772C42.9686 72.7782 42.9697 74.9749 44.385 74.9749L47.302 74.9727C48.1108 74.9727 48.7913 74.2948 48.7896 73.485L48.7859 60.9025C48.7853 60.0832 48.1178 59.4161 47.2964 59.4157L46.5167 59.4161V57.3565C47.8217 56.6159 50.2716 54.5115 50.2716 49.1506C50.2716 48.4299 50.2877 36.3347 50.2877 36.3347L53.8872 32.9006C54.0291 33.2618 54.085 33.6359 54.057 34.0281C53.9789 35.1243 53.2267 36.3762 52.0348 37.3855C50.6858 38.5563 50.1802 40.3369 50.8018 41.708C51.7436 43.8285 54.6348 43.3881 56.0969 42.1479C58.4362 40.1667 60.3699 37.4494 61.4024 34.693C62.62 31.4428 62.5584 28.2731 61.2342 25.4698L62.8331 23.9444L63.3279 24.4609C63.8876 25.0459 64.8458 25.0679 65.431 24.5081L74.5461 15.8068C75.1322 15.2469 75.1537 14.2881 74.5931 13.7028ZM17.7434 32.3468C14.0642 28.4904 15.3209 25.8166 15.4242 25.6148C15.6829 25.1907 15.6066 24.6748 15.2629 24.3146L13.5149 22.4825L22.4987 13.8839L24.4231 15.9011C24.7715 16.2665 25.324 16.3472 25.7625 16.0973C28.1975 14.7089 30.9341 14.5677 33.8961 15.6771C36.2762 16.5686 38.7245 18.3136 40.4455 20.3455C40.7436 20.6969 41.3334 21.7789 40.809 22.1949C40.2848 22.6108 39.3529 21.9302 39.0281 21.556C38.3679 20.7764 36.5717 18.9441 34.1583 18.7721C32.8168 18.6758 31.5304 19.1398 30.4354 20.112C30.2129 20.3095 30.08 20.5885 30.067 20.8854C30.054 21.1826 30.1618 21.4722 30.366 21.6883L32.8732 24.3425C32.8542 24.3422 32.8353 24.341 32.8161 24.341C32.8154 24.3409 32.8146 24.3409 32.814 24.341C31.8911 24.341 31.0235 24.7001 30.371 25.3523C29.7184 26.0046 29.3592 26.8721 29.3595 27.7946L29.3596 37.7086L26.1637 34.3756C25.6859 33.8763 24.9246 33.6187 24.3699 34.1696C23.7888 34.7466 24.0742 35.4938 24.6228 35.9439L29.3596 40.884C29.3596 41.2849 29.4244 41.7307 29.2727 42.1105C29.1308 42.4662 28.8083 42.6982 28.4319 42.7635C28.1623 42.8103 27.3648 42.7345 27.3874 42.3552C27.4715 40.5731 26.5316 38.9787 25.1093 38.4807C24.631 38.309 24.1102 38.3025 23.607 38.4504C23.6071 38.4502 19.6044 34.2974 17.7434 32.3468ZM35.0395 23.3049C35.0182 23.3261 34.9985 23.3484 34.9778 23.3701L32.868 21.1367C33.2312 20.993 33.6074 20.936 34.002 20.9643C34.8938 21.0279 35.8884 21.5374 36.7717 22.3669C36.12 22.5022 35.5211 22.8234 35.0395 23.3049ZM29.3598 46.7886C28.9974 46.6406 28.6858 46.4212 28.4194 46.1277C28.134 45.8131 27.9019 45.4095 27.7292 44.9437C27.8634 44.9624 27.9994 44.9743 28.137 44.9774C28.1629 44.978 28.1888 44.9783 28.2149 44.9783C28.6109 44.9783 28.9961 44.9079 29.3599 44.7797L29.3598 46.7886ZM48.0738 49.1503C48.0738 50.6884 47.8702 52.3011 47.1136 53.6652C46.7395 54.3396 46.2222 54.968 45.5599 55.3756C45.0153 55.7109 44.3189 55.8899 44.3189 56.6576V59.1828H31.8632V56.3986C31.8632 55.8943 31.5197 55.4546 31.0304 55.3324C28.305 54.6524 26.2237 52.8645 24.8443 50.0181C23.7362 47.7319 23.1686 44.7831 23.3262 42.1294C23.3535 41.6627 23.6462 40.5689 24.2831 40.5454C24.9873 40.5195 25.2162 41.7493 25.1931 42.2378C25.1326 43.2548 25.1672 45.8137 26.7922 47.6044C27.6971 48.6017 28.9508 49.1578 30.4178 49.2129C31.0314 49.2322 31.5578 48.7313 31.5578 48.1147L31.5574 27.7941C31.5568 26.3654 33.6454 26.0931 34.0281 27.4567L34.0282 42.4195C34.0282 43.0265 34.5202 43.5184 35.1271 43.5184H35.1731C35.78 43.5184 36.272 43.0265 36.272 42.4195L36.2258 25.7466C36.2251 24.1186 38.7412 24.1303 38.743 25.7455L38.6968 42.2495C38.6968 42.5032 38.7828 42.7367 38.927 42.9228C39.1241 43.218 39.4602 43.4124 39.8417 43.4124C40.4486 43.4124 40.9406 42.9204 40.9406 42.3136L40.9407 28.4902C41.2298 27.4595 42.6356 27.2661 43.2095 28.1525C43.3995 28.446 43.4116 28.758 43.4107 29.0887C43.4082 29.9713 43.3776 41.1854 43.3757 41.8698C43.3757 42.4602 43.6168 43.0653 44.2416 43.2249C44.9245 43.3993 45.609 42.8648 45.609 42.1608L45.6091 35.0023C45.8609 33.9712 47.3681 33.6729 47.8799 34.6478C48.2815 35.413 48.0881 36.3844 48.0866 37.2095C48.0821 39.5717 48.0738 47.5323 48.0738 49.1503ZM58.9241 25.7882C60.3125 28.2233 60.4539 30.9597 59.3443 33.9219C58.4528 36.302 56.7077 38.7502 54.6759 40.4711C54.3244 40.7694 53.2426 41.3592 52.8265 40.8346C52.4106 40.3104 53.091 39.3786 53.4653 39.0537C54.245 38.3935 56.0773 36.5974 56.2493 34.1841C56.3448 32.8436 55.8815 31.5562 54.9094 30.4611C54.7113 30.2382 54.4312 30.105 54.1332 30.0927C53.8331 30.0782 53.5448 30.1897 53.3291 30.3954L49.8824 33.6836C49.3005 32.5935 48.1514 31.8498 46.8321 31.8498C46.8312 31.8498 46.8302 31.8498 46.8293 31.8498C46.4056 31.8498 45.9938 31.9256 45.6089 32.0705V28.829C45.607 26.9257 44.0567 25.3779 42.1533 25.3779C42.1522 25.3778 42.1515 25.3779 42.1508 25.3779C41.7297 25.3779 41.32 25.4526 40.9372 25.5959C40.9199 25.1995 40.8351 24.8203 40.6946 24.4691C41.9914 24.3626 42.9481 23.4502 43.1423 22.1699C43.3513 20.792 42.7046 19.5687 41.8134 18.5722C42.0699 18.3383 42.3433 18.0849 42.6744 17.7692C46.5307 14.09 49.2048 15.3464 49.4064 15.4498C49.8306 15.7084 50.3465 15.6321 50.7066 15.2885L52.5388 13.5406L61.1374 22.5242L59.1201 24.4487C58.755 24.7971 58.6741 25.3496 58.9241 25.7882ZM64.4253 22.4293L52.7309 10.2254L60.818 2.50543L72.513 14.7088L64.4253 22.4293Z" fill={c1}/>
<path d="M65.1903 18.77C65.4628 18.77 65.7361 18.6692 65.9488 18.4663L68.1058 16.4084C69.1311 15.4298 67.6144 13.8405 66.5886 14.8181L64.4316 16.876C63.7313 17.5443 64.2157 18.77 65.1903 18.77Z" fill={c1}/>
<path d="M17.6455 10.9301C18.5939 10.9301 19.0929 9.7565 18.4404 9.07271L16.3825 6.9157C15.4044 5.89038 13.814 7.40741 14.7924 8.43273L16.8502 10.5897C17.0663 10.8161 17.3557 10.9301 17.6455 10.9301Z" fill={c1}/>
<path d="M31.4809 65.4595V68.4364C31.4809 69.8536 33.6786 69.8536 33.6786 68.4364V65.4595C33.6786 64.0422 31.4809 64.0422 31.4809 65.4595Z" fill={c1}/>
</svg>



// Button.propTypes = {
//   text: PropTypes.string,
//   type: PropTypes.string
// }

// Button.defaultProps = {
//   text: ``,
//   type: 'primary'
// }

export default SVGIcon