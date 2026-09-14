import json
import os

transcript_path = r"C:\Users\jonas\.gemini\antigravity-ide\brain\b47c4860-098f-4018-8e2e-c1cf69f28c58\.system_generated\logs\transcript_full.jsonl"

found_files = {}

with open(transcript_path, 'r', encoding='utf-8') as f:
    for line in f:
        if not line.strip(): continue
        try:
            data = json.loads(line)
            if 'tool_calls' in data and data['tool_calls']:
                for call in data['tool_calls']:
                    if call.get('function') in ('write_to_file', 'default_api:write_to_file', 'multi_replace_file_content', 'replace_file_content', 'default_api:multi_replace_file_content', 'default_api:replace_file_content'):
                        args = call.get('arguments', {})
                        if isinstance(args, str):
                            try:
                                args = json.loads(args)
                            except:
                                continue
                        
                        target_file = args.get('TargetFile', '')
                        if 'app\\servicos' in target_file or 'app/servicos' in target_file:
                            if call.get('function') in ('write_to_file', 'default_api:write_to_file'):
                                found_files[target_file] = args.get('CodeContent', '')
                                print(f"Found write to {target_file}")
                            # Not handling replace for now, just want the original writes
        except Exception as e:
            pass

for fpath, content in found_files.items():
    if not content: continue
    print(f"Restoring {fpath}")
    os.makedirs(os.path.dirname(fpath), exist_ok=True)
    with open(fpath, 'w', encoding='utf-8') as out:
        out.write(content)

print(f"Total files restored: {len(found_files)}")
