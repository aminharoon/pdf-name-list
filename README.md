# Name Card Generator

A simple web tool to create numbered name lists and export them as PDF documents.

## Features

- **Add Names Easily** - Enter names one by one with a simple input field
- **Manage Your List** - Remove individual names or clear the entire list
- **Numbered Export** - Automatically number names in the PDF output
- **High-Quality PDF** - Renders at 3x resolution for sharp, clear text
- **Single Page PDF** - All names fit perfectly on an A4 page
- **No Installation Needed** - Works directly in your browser

## How to Use

1. Open `index.html` in your web browser
2. Enter a name in the input field and click the **+** button (or press Enter)
3. Add as many names as you need
4. Remove any name by clicking the **×** button next to it
5. Click **Generate & Download** to create a PDF with all your names
6. The PDF will be downloaded with numbering like:
   ```
   1. Name One
   2. Name Two
   3. Name Three
   ```

## Files

- `index.html` - Main HTML structure
- `index.css` - Styling for the application
- `index.js` - JavaScript logic for name management and PDF generation
- `README.md` - Documentation

## Requirements

- Modern web browser (Chrome, Firefox, Safari, Edge)
- No external dependencies needed (uses CDN-hosted jsPDF library)

## Technologies Used

- HTML5 Canvas - For rendering the PDF content
- jsPDF - For PDF generation
- Vanilla JavaScript - No frameworks required

## License

Free to use and modify.
