set -e

echo "Entrypoint script is running..."

dockerize -wait tcp://db:3306 -timeout 20s

exec "$@"
