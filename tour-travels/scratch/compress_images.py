import os
from PIL import Image

def compress_and_convert():
    public_dir = r"c:\Users\Lenovo\Desktop\travels\kashatbhanjan travel\tour-travels\public"
    images_dir = os.path.join(public_dir, "images")
    
    # 1. Compress main logo
    logo_path = os.path.join(public_dir, "Tlogo.png")
    if os.path.exists(logo_path):
        print(f"Compressing logo: {logo_path}")
        with Image.open(logo_path) as img:
            # If the image has an alpha channel, we keep it
            webp_logo_path = os.path.join(public_dir, "logo.webp")
            # We can also resize it slightly to optimize. If it's 1.6MB, it must be massive resolution.
            # Let's check dimensions and resize if it is extremely large (e.g. > 512px)
            width, height = img.size
            if width > 512 or height > 512:
                # Resize keeping aspect ratio
                img.thumbnail((512, 512), Image.Resampling.LANCZOS)
                print(f"Resized logo from {width}x{height} to {img.width}x{img.height}")
            img.save(webp_logo_path, "WEBP", quality=85)
            print(f"Saved: {webp_logo_path} (Size: {os.path.getsize(webp_logo_path)} bytes)")
        
        # Remove original large logo
        try:
            os.remove(logo_path)
            print("Removed original PNG logo.")
        except Exception as e:
            print(f"Could not remove PNG logo: {e}")
    else:
        print("Tlogo.png not found, skipping.")
        
    # 2. Compress images in images directory
    if os.path.exists(images_dir):
        for filename in os.listdir(images_dir):
            if filename.lower().endswith(".png"):
                png_path = os.path.join(images_dir, filename)
                name, _ = os.path.splitext(filename)
                webp_path = os.path.join(images_dir, f"{name}.webp")
                
                print(f"Converting: {png_path}...")
                with Image.open(png_path) as img:
                    # Resize very large images to standard full-HD/1200px size for web performance if necessary.
                    width, height = img.size
                    if width > 1200 or height > 1200:
                        img.thumbnail((1200, 1200), Image.Resampling.LANCZOS)
                        print(f"Resized image from {width}x{height} to {img.width}x{img.height}")
                    img.save(webp_path, "WEBP", quality=80)
                    print(f"Saved: {webp_path} (Size: {os.path.getsize(webp_path)} bytes)")
                
                # Delete original PNG
                try:
                    os.remove(png_path)
                    print(f"Removed original PNG: {filename}")
                except Exception as e:
                    print(f"Could not remove original PNG {filename}: {e}")
    else:
        print("Images directory not found.")

if __name__ == "__main__":
    compress_and_convert()
