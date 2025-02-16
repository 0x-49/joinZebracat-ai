import os
from pathlib import Path

def combine_astro_files():
    # Get the project root directory
    project_root = Path(os.getcwd())
    
    # Create output file
    output_file = project_root / 'TempCombined.txt'
    
    # Find and combine all .astro files
    with open(output_file, 'w', encoding='utf-8') as outfile:
        for root, _, files in os.walk(project_root / 'src'):
            for file in files:
                if file.endswith('.astro'):
                    file_path = Path(root) / file
                    rel_path = file_path.relative_to(project_root)
                    
                    # Write file header
                    outfile.write(f"\n{'='*80}\n")
                    outfile.write(f"File: {rel_path}\n")
                    outfile.write(f"{'='*80}\n\n")
                    
                    # Write file contents
                    try:
                        with open(file_path, 'r', encoding='utf-8') as infile:
                            outfile.write(infile.read())
                        outfile.write('\n\n')
                    except Exception as e:
                        outfile.write(f"Error reading file: {str(e)}\n\n")

if __name__ == "__main__":
    print("Starting to combine Astro files...")
    combine_astro_files()
    print("Done! Check TempCombined.txt for the combined content.")
