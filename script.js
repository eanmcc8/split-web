/**
 * GUST Browser - Main Script
 * 
 * This file contains the JavaScript functionality for the GUST browser application.
 * Add your JavaScript code here.
 */

// Check if ES modules are supported
if (!window._esModulesSupported) {
    console.warn('ES Modules are not supported in this browser');
}

// Check if iso-639-1 library is loaded
if (window._iso639Ready) {
    console.log('ISO 639-1 library loaded successfully');
}

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    console.log('GUST Browser initialized');
    // Add your initialization code here
});