import Quartz
import sys
import os
from Foundation import NSURL

def extract_pages(pdf_path, output_dir):
    url = NSURL.fileURLWithPath_(pdf_path)
    pdf_doc = Quartz.PDFDocument.alloc().initWithURL_(url)
    
    if not pdf_doc:
        print(f"Could not open PDF: {pdf_path}")
        sys.exit(1)
        
    page_count = pdf_doc.pageCount()
    print(f"Found {page_count} pages.")
    
    for i in range(page_count):
        page = pdf_doc.pageAtIndex_(i)
        image = Quartz.NSImage.alloc().initWithSize_(page.boundsForBox_(Quartz.kPDFDisplayBoxMediaBox).size)
        
        image.lockFocus()
        context = Quartz.NSGraphicsContext.currentContext().CGContext()
        Quartz.CGContextSetRGBFillColor(context, 1.0, 1.0, 1.0, 1.0)
        Quartz.CGContextFillRect(context, page.boundsForBox_(Quartz.kPDFDisplayBoxMediaBox))
        page.drawWithBox_toContext_(Quartz.kPDFDisplayBoxMediaBox, context)
        image.unlockFocus()
        
        tiff_data = image.TIFFRepresentation()
        bitmap = Quartz.NSBitmapImageRep.imageRepWithData_(tiff_data)
        png_data = bitmap.representationUsingType_properties_(Quartz.NSBitmapImageFileTypePNG, None)
        
        output_path = os.path.join(output_dir, f"project-{i+1}.png")
        png_data.writeToFile_atomically_(output_path, True)
        print(f"Saved {output_path}")

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Usage: python3 extract_pdf.py <pdf_path> <output_dir>")
        sys.exit(1)
        
    extract_pages(sys.argv[1], sys.argv[2])
