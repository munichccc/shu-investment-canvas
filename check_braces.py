import re

with open('update_data.py', 'r', encoding='utf-8') as f:
    content = f.read()

# Extract js_template content
# js_template starts at js_template = """ and ends at """
match = re.search(r'js_template = """(.*?)"""', content, re.DOTALL)
if match:
    template = match.group(1)
    lines = template.split('\n')
    for idx, line in enumerate(lines, start=933):
        # We want to check for single braces { and } in the line
        # but ignoring double braces {{ and }}
        # To do this, we can replace {{ with empty and }} with empty
        # and then check if there are any remaining { or } that are NOT
        # the format parameters: title, stocks, stocks_data_json, active_stock, selector_options
        
        # Let's clean the double braces
        cleaned = line.replace('{{', '').replace('}}', '')
        # Now find any { or }
        for m in re.finditer(r'\{([^{}]*)\}', cleaned):
            param = m.group(1)
            if param not in ['title', 'stocks', 'stocks_data_json', 'active_stock', 'selector_options']:
                print(f"Line {idx}: Single curly braces for non-format param: '{m.group(0)}' in line: {line.strip()}")
        # Check for unbalanced single braces
        open_braces = cleaned.count('{')
        close_braces = cleaned.count('}')
        if open_braces != close_braces:
            print(f"Line {idx}: Unbalanced braces: {open_braces} open, {close_braces} close in line: {line.strip()}")
else:
    print("Could not find js_template")
