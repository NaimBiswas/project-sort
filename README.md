
# 📦 Package Sorter

This project simulates a robotic dispatch system for sorting packages based on their **volume** and **mass**. It follows the rules defined by Thoughtful robotic automation factory to classify packages into `STANDARD`, `SPECIAL`, or `REJECTED` stacks.

## 🚀 Live Demo

Click Here: https://naimbiswas.github.io/project-sort/

## 📐 Sorting Rules

Packages are sorted using the following logic:

- A package is **bulky** if:

  - Volume ≥ 1,000,000 cm³, or
  - Any dimension (width, height, length) ≥ 150 cm
- A package is **heavy** if:

  - Mass ≥ 20 kg

### 🧭 Dispatch Stacks

| Condition                 | Stack    |
| ------------------------- | -------- |
| Not bulky and not heavy   | STANDARD |
| Bulky or heavy (not both) | SPECIAL  |
| Bulky and heavy           | REJECTED |

## 🧪 How to Use

1. Enter the package dimensions and mass in the form.
2. Click **Sort Package**.
3. The result will display the appropriate stack.

## 🗂️ File Structure

package-sorter/
├── index.html      # UI form for input
├── script.js       # Sorting logic and DOM interaction
├── style.css       # Optional styling
└── README.md       # Project documentation

## 🧠 Example Inputs

| Width | Height | Length | Mass | Result   |
| ----- | ------ | ------ | ---- | -------- |
| 100   | 100    | 100    | 10   | SPECIAL  |
| 200   | 50     | 50     | 10   | SPECIAL  |
| 100   | 100    | 100    | 25   | SPECIAL  |
| 200   | 200    | 200    | 25   | REJECTED |
| 149   | 149    | 149    | 19.9 | STANDARD |
| 150   | 150    | 150    | 20   | REJECTED |

## 🛠️ Tech Stack

- HTML
- CSS
- JavaScript (Vanilla)
- 📬 Feedback
