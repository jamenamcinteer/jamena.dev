import React from "react"

const SVGIcon = ({ c1, c2, c3 }) => <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="75" height="75" fill="none"/>
<path d="M37.5 0C16.7896 0 0 16.7896 0 37.5C0 58.2104 16.7896 75 37.5 75C58.2104 75 75 58.2104 75 37.5C74.9768 16.7993 58.2007 0.0231934 37.5 0ZM37.5 72.5C18.1702 72.5 2.5 56.8298 2.5 37.5C2.5 18.1702 18.1702 2.5 37.5 2.5C56.8298 2.5 72.5 18.1702 72.5 37.5C72.478 56.8207 56.8207 72.478 37.5 72.5Z" fill={c1}/>
<path d="M66.2128 36.1127V35.9625C66.1865 35.5627 66.1603 35.1611 66.1212 34.776C66.0828 34.3915 66.0425 33.9948 65.9961 33.6273C65.954 33.3051 65.9113 32.9828 65.8563 32.7527C65.8026 32.3773 65.7312 32.0026 65.6512 31.6077L65.614 31.4398C65.5487 31.1426 65.4797 30.8374 65.4089 30.5652C65.2161 29.7748 64.9689 28.9398 64.6588 28.0475C64.5752 27.7826 64.4788 27.5323 64.3927 27.3126C64.2676 26.9727 64.1351 26.6339 63.9911 26.3123C63.8062 25.8752 63.6163 25.4535 63.4253 25.0623C63.2501 24.6875 63.0615 24.3213 62.8735 23.985C62.417 23.1104 61.9098 22.262 61.3562 21.4447L61.3312 21.4099V21.4038C61.3074 21.369 61.2824 21.3361 61.2573 21.3C61.0864 21.0498 60.9125 20.8002 60.7349 20.5615L60.5603 20.321C60.3186 19.986 60.0598 19.6625 59.7137 19.2511C59.657 19.1876 59.6039 19.1205 59.5551 19.0503C59.3585 18.8165 59.1498 18.5797 58.9301 18.3313C58.855 18.2501 58.7738 18.1714 58.6987 18.0914L60.8923 15.8972L59.1248 14.1302L56.9299 16.3251C56.8311 16.2311 56.7413 16.1389 56.64 16.0461C56.4172 15.8502 56.1951 15.6525 55.9174 15.4211C55.8911 15.4022 55.8637 15.3827 55.8276 15.354C55.791 15.3247 55.7477 15.2875 55.6848 15.2289C55.3613 14.9585 55.0372 14.7028 54.726 14.4788L54.7076 14.4647L54.4574 14.2834C54.1675 14.0723 53.88 13.8635 53.5828 13.6664C52.7716 13.1158 51.9293 12.6123 51.0614 12.1576C50.6976 11.9562 50.3339 11.7664 49.9915 11.6077C49.5673 11.3965 49.1437 11.2115 48.7238 11.0327C48.3838 10.8826 48.0438 10.7465 47.6965 10.6213C47.4585 10.5298 47.2199 10.4388 47.0013 10.3711C46.0724 10.05 45.2374 9.80225 44.4714 9.62097C44.1486 9.53613 43.8147 9.4635 43.3911 9.37134C43.0164 9.2926 42.641 9.22363 42.3462 9.18518C42.0374 9.11743 41.7285 9.07654 41.3898 9.03259C41.015 8.9801 40.625 8.94104 40.2277 8.90015C39.8297 8.85864 39.436 8.83606 38.9624 8.80981C38.0151 8.75854 37.066 8.75854 36.1188 8.80981H35.9778C35.5762 8.83606 35.174 8.8623 34.7748 8.90137C34.3762 8.93982 33.9978 8.9801 33.5913 9.03625C33.2837 9.07654 32.9749 9.11743 32.7539 9.1687C32.3785 9.22363 32.0038 9.29382 31.521 9.39392C31.1975 9.46655 30.8636 9.53857 30.564 9.61853C29.7748 9.80774 28.9386 10.0549 28.045 10.3687C27.7948 10.4486 27.5537 10.5402 27.309 10.6335C26.969 10.7587 26.629 10.8923 26.3086 11.0364C25.8698 11.2213 25.4462 11.4111 25.0586 11.6028C24.6838 11.7761 24.3188 11.9666 23.9801 12.1539C23.8477 12.2235 23.7189 12.3022 23.5876 12.3737C22.854 12.774 22.1301 13.205 21.4423 13.6713H21.4252L21.2885 13.7689C21.0388 13.9355 20.7965 14.1064 20.5615 14.2822L20.3186 14.4598C20.1501 14.585 19.9835 14.7101 19.8114 14.8425C19.6387 14.975 19.4562 15.13 19.2548 15.3003C19.2297 15.3247 19.2023 15.3479 19.1736 15.3687L19.0485 15.4651C18.8263 15.6512 18.6035 15.849 18.3301 16.0901C17.5537 16.8024 16.7999 17.5549 16.0797 18.3398C15.8698 18.5748 15.661 18.811 15.4248 19.0973C15.3644 19.1809 15.2979 19.2596 15.2264 19.3335C14.9573 19.6576 14.7015 19.9811 14.4763 20.2911L14.4647 20.3052V20.3137L14.2877 20.556C14.0765 20.8478 13.866 21.1365 13.6627 21.4313C13.1122 22.2412 12.6086 23.0823 12.1539 23.9502C11.9525 24.314 11.7639 24.6777 11.604 25.0226C11.3922 25.4462 11.2073 25.8673 11.0272 26.2903C10.8789 26.6302 10.7428 26.969 10.6323 27.2772C10.5353 27.5275 10.4388 27.7777 10.3662 28.0127C10.0476 28.9374 9.7998 29.7711 9.61609 30.5438C9.5398 30.8386 9.47144 31.1438 9.40613 31.441L9.36646 31.6187C9.28528 31.994 9.21753 32.3761 9.1803 32.6648C9.10889 32.9889 9.06616 33.3112 9.02527 33.6237C8.974 33.999 8.93372 34.3927 8.90015 34.7803C8.86597 35.1672 8.83484 35.5688 8.80737 36.051C8.77991 36.5338 8.75 37.0148 8.75 37.5C8.75 37.9852 8.76221 38.4698 8.78723 38.8873V39.0375C8.81348 39.4373 8.83972 39.8389 8.87878 40.224C8.91724 40.6085 8.95752 41.0052 9.00391 41.3727C9.04602 41.6949 9.08875 42.0172 9.14368 42.2473C9.19739 42.6227 9.2688 42.9974 9.34875 43.3923L9.38599 43.5602C9.45129 43.8574 9.52026 44.1626 9.59106 44.4348C9.78394 45.2252 10.0311 46.0602 10.3412 46.9525C10.4248 47.2174 10.5212 47.4677 10.6073 47.6874C10.7324 48.0273 10.8649 48.3661 11.0089 48.6877C11.1938 49.1248 11.3837 49.5465 11.5747 49.9377C11.7499 50.3125 11.9385 50.6787 12.1277 51.0175C12.2711 51.2939 12.4286 51.5814 12.5861 51.8561L13.2111 52.9449L22.9724 47.3199L22.3425 46.25C19.2163 40.8356 19.2163 34.1644 22.3425 28.75C23.8831 26.0919 26.0919 23.8831 28.75 22.3425C34.1803 19.2761 40.8197 19.2761 46.25 22.3425C47.204 22.9083 48.1018 23.5645 48.9313 24.3011L40.9424 32.29C38.2581 30.5133 34.6649 31.0583 32.6282 33.551C30.5914 36.0437 30.7739 39.6741 33.0499 41.9501C35.3259 44.2261 38.9563 44.4086 41.449 42.3718C43.9417 40.3351 44.4867 36.7419 42.71 34.0576L50.6989 26.0687C55.6079 31.6815 56.3959 39.798 52.6575 46.25L52.0325 47.3352L61.7938 52.9602L62.4188 51.8713C62.5763 51.5961 62.7338 51.3086 62.865 51.0577C63.0664 50.694 63.255 50.3302 63.4149 49.9847C63.6261 49.5612 63.811 49.14 63.9911 48.7177C64.14 48.3777 64.2761 48.0389 64.386 47.7301C64.4836 47.4799 64.5801 47.2302 64.6527 46.9952C64.9713 46.0699 65.2185 45.2362 65.4022 44.4635C65.4785 44.1687 65.5475 43.8635 65.6128 43.5663L65.6525 43.3887C65.7336 43.0139 65.8014 42.6312 65.8386 42.3425C65.91 42.019 65.9528 41.6962 65.9937 41.3837C66.0449 41.0089 66.0852 40.6152 66.1188 40.2277C66.1523 39.8401 66.1835 39.4385 66.2116 38.9563C66.239 38.4735 66.25 37.9852 66.25 37.5C66.25 37.0148 66.2378 36.5302 66.2128 36.1127ZM62.9773 31.1627C63.0463 31.4301 63.1024 31.7065 63.1677 31.9763L63.2025 32.1375C63.2715 32.4585 63.3276 32.7802 63.3911 33.1915C63.446 33.4412 63.4778 33.6914 63.5162 33.9587C63.5651 34.3048 63.5999 34.6637 63.6414 35.0262C63.6615 35.2185 63.6762 35.4138 63.6902 35.6012C63.7024 35.7611 63.7128 35.9149 63.7225 36.0498V36.181V36.25H57.4585C57.2955 33.5895 56.5997 30.9888 55.4126 28.6023L60.8337 25.4773C60.946 25.6897 61.059 25.896 61.17 26.1353C61.3574 26.51 61.5222 26.8848 61.6925 27.2913C61.8176 27.5775 61.9324 27.8625 62.0477 28.1787C62.1252 28.3801 62.204 28.5785 62.2815 28.8214C62.5739 29.6686 62.8003 30.4303 62.9773 31.1627ZM39.9799 11.3751C40.3375 11.4111 40.6964 11.4465 41.0864 11.5002C41.3287 11.5326 41.5686 11.5625 41.8988 11.6315C42.2199 11.676 42.5427 11.7352 42.9474 11.8213C43.241 11.886 43.5425 11.9537 43.8562 12.0337C44.566 12.2064 45.3265 12.431 46.214 12.7374C46.4124 12.7985 46.601 12.8735 46.8512 12.97C47.1375 13.0725 47.4225 13.1873 47.7264 13.3197C48.114 13.4839 48.4912 13.6475 48.9002 13.8525C49.1077 13.949 49.3164 14.0637 49.5252 14.1724L46.4002 19.5959C44.0088 18.4253 41.4081 17.7435 38.75 17.5897V11.2823H38.8751C39.2499 11.3086 39.6173 11.3324 39.9799 11.3751ZM28.2098 12.9462C28.399 12.8735 28.5852 12.7985 28.8202 12.7264C29.6735 12.431 30.434 12.2064 31.1652 12.0288C31.4575 11.9537 31.759 11.886 32.135 11.8036C32.4573 11.7352 32.7802 11.6785 33.1885 11.615C33.4314 11.5625 33.6725 11.5326 33.9587 11.4899C34.3036 11.4423 34.6625 11.4075 35.0214 11.3715C35.3803 11.3348 35.7562 11.311 36.0498 11.2903H36.25V17.5964C33.5938 17.7478 30.9943 18.4277 28.6035 19.5959L25.4785 14.1736C25.6915 14.0613 25.8972 13.949 26.1377 13.8361C26.5125 13.6475 26.8872 13.4839 27.2949 13.3136C27.5775 13.1812 27.8626 13.0664 28.2098 12.9401V12.9462ZM11.4899 33.9478C11.5222 33.6975 11.554 33.4473 11.6248 33.1012C11.6711 32.7802 11.7285 32.4585 11.795 32.1472L11.8323 31.9763C11.8927 31.7065 11.9574 31.4301 12.0276 31.1438C12.1997 30.4303 12.4261 29.6686 12.7301 28.7885C12.796 28.5773 12.8748 28.3789 12.9639 28.1476C13.0676 27.8613 13.1812 27.5763 13.3124 27.2723C13.4778 26.8848 13.6426 26.5088 13.8464 26.0986C13.9423 25.8911 14.0576 25.6812 14.1663 25.4736L19.5874 28.5986C18.4003 30.9863 17.7045 33.5883 17.5415 36.25H11.2811C11.2811 36.2073 11.2811 36.17 11.2811 36.1249C11.3049 35.7501 11.3287 35.3827 11.3647 35.0214C11.4014 34.66 11.4398 34.3048 11.4899 33.9478ZM14.1663 49.5239C14.054 49.3115 13.941 49.1052 13.83 48.866C13.6426 48.4912 13.4778 48.1165 13.3075 47.71C13.1824 47.4237 13.0676 47.1387 12.9523 46.8225C12.8748 46.6211 12.796 46.4227 12.7185 46.1798C12.4261 45.3314 12.1997 44.5697 12.0227 43.8373C11.9537 43.5699 11.8976 43.2935 11.8323 43.0237L11.7975 42.8625C11.7285 42.5415 11.6724 42.2198 11.6089 41.8085C11.554 41.5588 11.5222 41.3086 11.4838 41.0413C11.4349 40.6952 11.4001 40.3363 11.3586 39.9738C11.3385 39.7815 11.3239 39.5862 11.3098 39.3988C11.2976 39.2389 11.2872 39.0851 11.2775 38.9502V38.8251C11.2775 38.8013 11.2775 38.7787 11.2775 38.7561H17.5665C17.7185 41.4148 18.4027 44.0155 19.5789 46.405L14.1663 49.5239ZM20.8411 26.4386L15.415 23.3136C15.5212 23.1488 15.6201 22.981 15.7312 22.8137L15.7636 22.7698C15.9875 22.4438 16.2128 22.1185 16.4777 21.77C16.6852 21.4813 16.9049 21.2036 17.0563 21.0199C17.1704 20.9027 17.276 20.7776 17.3724 20.6451C17.5513 20.4303 17.7478 20.2148 17.9211 20.0201C18.5822 19.2999 19.2834 18.5986 20.0262 17.9163C20.2313 17.7362 20.4352 17.5549 20.5835 17.4286L20.791 17.2675C20.8386 17.229 20.8838 17.1869 20.9265 17.1423C21.2024 16.911 21.4789 16.6925 21.7926 16.4661C22.1399 16.2036 22.4878 15.9662 22.8265 15.73C22.9828 15.6238 23.1586 15.5389 23.3173 15.4364L26.4423 20.849C24.2242 22.3236 22.3206 24.2236 20.8411 26.4386ZM48.5614 20.8411L51.6864 15.415C51.8463 15.5176 52.0099 15.614 52.1674 15.7214C52.5122 15.9589 52.8589 16.1975 53.2288 16.4789C53.5162 16.684 53.7915 16.9025 53.9899 17.0636C54.0552 17.1265 54.1235 17.1887 54.1888 17.24C54.2535 17.2913 54.314 17.3389 54.3573 17.3712C54.5612 17.5427 54.765 17.724 54.989 17.9199C55.0439 17.9712 55.0964 18.0249 55.1526 18.0762L50.7227 22.5061C50.0409 21.9025 49.3189 21.3464 48.5614 20.8411ZM41.25 37.5C41.25 39.5709 39.5709 41.25 37.5 41.25C35.4291 41.25 33.75 39.5709 33.75 37.5C33.75 35.4291 35.4291 33.75 37.5 33.75C38.0566 33.7524 38.606 33.8806 39.1064 34.1248L38.139 35.0928C37.9309 35.0336 37.7161 35.0024 37.5 35C36.1194 35 35 36.1194 35 37.5C35 38.8806 36.1194 40 37.5 40C38.8806 40 40 38.8806 40 37.5C39.997 37.2839 39.9658 37.0691 39.906 36.861L40.874 35.8936C41.1188 36.394 41.2476 36.9427 41.25 37.5ZM52.5 24.2737L56.9299 19.8438C56.9763 19.895 57.0264 19.9438 57.0728 19.9939C57.2638 20.2087 57.4548 20.4236 57.594 20.5878C57.6776 20.7062 57.7698 20.8185 57.8699 20.9235C58.1 21.2 58.3185 21.4752 58.5449 21.7889L58.5614 21.8127C58.811 22.1448 59.0436 22.4774 59.2835 22.8265C59.3915 22.984 59.4751 23.1573 59.5776 23.3185L54.165 26.4435C53.6603 25.683 53.1043 24.9579 52.5 24.2737ZM63.5162 41.0522C63.4839 41.3025 63.4528 41.5527 63.3814 41.8988C63.335 42.2198 63.2776 42.5415 63.2111 42.8528L63.1738 43.0237C63.114 43.2935 63.0487 43.5699 62.9785 43.8562C62.8064 44.5697 62.58 45.3314 62.276 46.2115C62.2101 46.4227 62.1314 46.6211 62.0422 46.8524C61.9385 47.1387 61.825 47.4237 61.6937 47.7277C61.5289 48.1152 61.3635 48.4912 61.1603 48.9014C61.0638 49.1101 60.9485 49.3176 60.8398 49.5264L55.4211 46.4014C56.5955 44.0106 57.2772 41.4087 57.4274 38.75H63.7189V38.8751C63.6951 39.2499 63.6713 39.6173 63.6353 39.9786C63.5986 40.34 63.5602 40.6952 63.5101 41.0522H63.5162Z" fill={c1}/>
<path d="M23.75 58.75H51.25V51.25H23.75V58.75ZM26.25 53.75H48.75V56.25H26.25V53.75Z" fill={c1}/>
</svg>

export default SVGIcon