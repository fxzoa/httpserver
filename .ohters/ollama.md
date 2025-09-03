# 現在利用可モデル一覧を取得
curl http://192.168.107.141:11434/api/tags | jq "."

# 現在ロード中のモデル確認
curl http://192.168.107.141:11434/api/ps | jq "."

# サーバログ確認
docker logs <ollamaコンテナ名> --tail 100

# systemd 起動なら
journalctl -u ollama -f

# リソース確認
nvidia-smi   # GPUのVRAM使用量
free -h      # RAM使用量

# プロンプトを送って応答を受け取る
curl -X POST http://192.168.107.141:11434/api/generate \
-H "Content-Type: application/json" \
-d '{
  "model": "qwen3-coder:latest",
  "prompt": "Write a Python function that reverses a string"
}'


# デフォルトでは stdout/stderr に出力
ollama serve >> /var/log/ollama.log 2>&1 &
