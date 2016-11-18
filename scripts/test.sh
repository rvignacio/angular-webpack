echo "Cleaning files"
echo " > .tmp"
rm -rf .tmp

echo ""
echo "Checking files with ESLint"
./node_modules/.bin/eslint src/
if [ "$?" -ne 0 ]
then
    exit 1
fi
echo " done"

echo ""
echo "Running unit tests with Karma"
./node_modules/.bin/karma start --single-run --no-auto-watch
