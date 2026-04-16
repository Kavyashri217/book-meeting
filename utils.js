// Utility functions for various functionalities

// Theme management
function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
}

// Toast notifications
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// Modal management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'block';
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = 'none';
}

// URL utilities
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Analytics
function trackEvent(event) {
    // Implementation for tracking events
}

// Social tracking
function trackSocialShare(platform) {
    // Implementation for social media tracking
}

// Button tracking
function trackButtonClick(buttonId) {
    // Implementation for button click tracking
}

// Share functionality
function shareContent(content, url) {
    navigator.share({
        title: 'Check this out!',
        text: content,
        url: url
    });
}

// Accessibility helpers
function focusElement(elementId) {
    document.getElementById(elementId).focus();
}