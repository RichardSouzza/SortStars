# SortStars

Program to sort starred repositories.

## Execution

### Token Generation

1. In GitHub, go to Settings / Developer Settings / Personal access tokens / Tokens (classic);

2. Click "Generate new token" and "Generate new token (classic)";

> [!TIP]
> Or simply click [here](https://github.com/settings/tokens/new) 😉

3. In the "Note" input, give your token a name.

4. Check the "public_repo" scope;

5. Scroll down the page and click "Generate token";

6. Copy the token code.

### Sorting stars! ⭐

1. Clone the repository:

```sh
git clone https://github.com/RichardSouzza/SortStars
```

2. Install the dependencies:

```sh
npm i
```

3. Create an env file containing your token:

```sh
echo USER_TOKEN=your_token_here > .env
```

4. Sort your stars!

```sh
node .
```

## Troubleshooting

### Unauthorized

The token you provided may be incorrect.

### Incorrect ordering

GitHub handles star requests asynchronously, which can
sometimes lead to one repository being starred before another.

To fix this, simply increase the delay time.
