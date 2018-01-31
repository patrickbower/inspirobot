# Bot Doc

### There are three parts to the chat bot
- `bot-dialog` has linked conversation pieces (saying).
- `bot-listeners` are watch words that can trigger `bot-dialog` pieces (listening).
- `bot-functions` list call methods to perform actions (doing).

### JSON Logic

```
"intro": {          - {object} Name of dialog piece
    "question":     - {string} What chat bot is saying
    "answer": {
        "yes":      - {object} Piece of dialog to be called when replying, 'yes'
        "no":       - {object} Piece of dialog to be called when replying, 'no'
        "input":    - {string} Data for chat bot to handle
    },
    "function":     - {function} Method to call
    "listeners":    - {string} words chat bot is always listening for
}
```



