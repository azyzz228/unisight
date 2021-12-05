import React from 'react'

function PlayIcon(props) {
    return (
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.83325 11.0052C1.83325 5.94565 5.94763 1.83325 10.9999 1.83325C16.0522 1.83325 20.1666 5.94565 20.1666 11.0052C20.1666 16.0542 16.0522 20.1666 10.9999 20.1666C5.94763 20.1666 1.83325 16.0542 1.83325 11.0052ZM14.3622 11.9329C14.4595 11.8357 14.5834 11.6853 14.61 11.6499C14.7515 11.4642 14.8223 11.2343 14.8223 11.0052C14.8223 10.7479 14.7427 10.5091 14.5923 10.3145C14.5799 10.3022 14.5558 10.2759 14.5243 10.2417C14.4655 10.1776 14.381 10.0857 14.3003 10.005C13.5747 9.22672 11.6812 7.95321 10.6902 7.56408C10.5398 7.50305 10.1593 7.36951 9.95584 7.36067C9.76118 7.36067 9.57537 7.40489 9.39841 7.49333C9.1772 7.61714 9.00024 7.8117 8.90291 8.04165C8.84097 8.20083 8.74364 8.6784 8.74364 8.68725C8.64631 9.20904 8.59323 10.058 8.59323 10.9955C8.59323 11.8896 8.64631 12.7024 8.72595 13.233C8.72814 13.2352 8.73575 13.2731 8.74757 13.3321C8.78352 13.5113 8.85841 13.8847 8.9383 14.0378C9.13296 14.4092 9.51343 14.6392 9.92045 14.6392H9.95584C10.2213 14.6303 10.7787 14.4004 10.7787 14.3915C11.7166 14.0024 13.5659 12.7908 14.3091 11.986L14.3622 11.9329Z" fill={props.isActive ? '#308297' : '#BABCCF'} />
        </svg>

    )
}

export default PlayIcon