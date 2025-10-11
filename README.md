# 🧮 JavaScript Calculator

A fully functional calculator built with vanilla JavaScript, HTML, and CSS. This project was created as part of [The Odin Project](https://www.theodinproject.com/) curriculum to practice DOM manipulation, event handling, and JavaScript fundamentals.

![Calculator Demo](https://img.shields.io/badge/Status-Completed-success)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![HTML5](https://img.shields.io/badge/HTML-5-orange)
![CSS3](https://img.shields.io/badge/CSS-3-blue)

## ✨ Features

- ➕ Basic arithmetic operations (addition, subtraction, multiplication, division)
- 🔢 Support for decimal numbers
- ⌫ Backspace functionality to delete last digit
- 🔄 Clear button to reset calculator
- 📱 Responsive design with modern UI
- ⌨️ Real-time display updates
- 🎨 Beautiful gradient interface with smooth animations

## 🚀 Live Demo

[View Live Demo](#) <!-- Add your GitHub Pages or deployment link here -->

## 📸 Screenshots

<!-- Add screenshots of your calculator here -->

## 🛠️ Technologies Used

- **HTML5** - Structure and layout
- **CSS3** - Styling, animations, and responsive design
- **JavaScript (ES6)** - Logic and interactivity
  - DOM manipulation
  - Event listeners
  - Arrow functions
  - Template literals

## 📂 Project Structure

```
calculator/
├── index.html          # Main HTML file
├── calculator.css          # CSS styling (if separate)
├── index.js           # JavaScript logic (if separate)
└── README.md           # Project documentation
```

## 💡 How It Works

### Core Concepts

1. **Event Delegation**: Uses `forEach()` to attach event listeners to multiple buttons
2. **Data Attributes**: Stores button values in `data-number` and `data-operator` attributes
3. **State Management**: Maintains calculator state with three variables:
   - `currentOperand` - Current number being entered
   - `previousOperand` - First number in calculation
   - `operation` - Selected operator (+, -, ×, ÷)

### Key Functions

```javascript
// Math operations
add(num1, num2)           // Addition
subtract(num1, num2)      // Subtraction
multiply(num1, num2)      // Multiplication
divide(num1, num2)        // Division with zero check

// Core functionality
calculate()         // Performs calculation based on operator
updateDisplay()     // Updates calculator display
```

## 🎯 Learning Outcomes

Through building this calculator, I learned:

- ✅ How to manipulate the DOM effectively
- ✅ Event handling with `addEventListener()`
- ✅ Using `querySelectorAll()` and `forEach()` for multiple elements
- ✅ Working with data attributes (`data-*`)
- ✅ String concatenation vs number operations
- ✅ Implementing calculator logic and state management
- ✅ CSS Grid for button layout
- ✅ Debugging with `console.log()`

## 🔧 Installation & Usage

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/calculator.git
   ```

2. **Navigate to project directory**
   ```bash
   cd calculator
   ```

3. **Open in browser**
   ```bash
   # Simply open index.html in your browser
   # Or use a live server (recommended)
   ```

## 🎮 How to Use

1. Click number buttons to enter numbers
2. Click an operator (+, -, ×, ÷) to select operation
3. Enter second number
4. Click `=` to see result
5. Click `AC` to clear all
6. Click `←` to delete last digit
7. Click `.` to add decimal point

## 🐛 Known Issues & Future Improvements

### Current Limitations
- No keyboard support (planned)
- No calculation history (planned)
- Limited to two operands per calculation

### Future Enhancements
- [ ] Add keyboard input support
- [ ] Implement calculation history
- [ ] Add memory functions (M+, M-, MR, MC)
- [ ] Support for chaining operations
- [ ] Add percentage calculations
- [ ] Implement scientific calculator mode
- [ ] Add dark/light theme toggle

## 🤔 Challenges Faced

1. **Understanding forEach loops**: Initially struggled with looping through NodeLists and adding event listeners to multiple elements
2. **Data attributes**: Learning how to use `data-*` attributes and access them via `dataset`
3. **String vs Number operations**: Handling when to concatenate strings vs perform math operations
4. **Display logic**: Implementing the `||` operator for default display values

## 📚 Resources Used

- [The Odin Project - Calculator Project](https://www.theodinproject.com/)
- [MDN Web Docs - JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [MDN - Event Listeners](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [MDN - Data Attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
- [CSS Tricks - CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)

## 👨‍💻 Author

**Eddie Otieno Ratego**
- GitHub: [@pawaomoro](https://github.com/Pawaomoro/Calculator)
- LinkedIn: [EDDIE OTIENO RATEGO](https://www.linkedin.com/in/eddie-otieno-17a0a0317/)

## 🙏 Acknowledgments

- Thanks to [The Odin Project](https://www.theodinproject.com/) for the excellent curriculum
- Inspired by the classic calculator design
- Special thanks to the developer community for helpful resources

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

⭐ If you found this project helpful, please consider giving it a star!

## 🔗 Related Projects

- [Rock Paper Scissors](link) - Another Odin Project
- [Etch-a-Sketch](link) - DOM manipulation project


---

**Note**: This is a learning project created as part of web development studies. Feedback and suggestions are always welcome!