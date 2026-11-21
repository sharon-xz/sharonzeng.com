import { NextResponse } from 'next/server'
import { headers } from 'next/headers'

export async function GET(request: Request) {
  const headersList = headers()
  const ifNoneMatch = headersList.get('if-none-match')
  const range = headersList.get('range')
  
  // Example content
  const content = 'This is some example content that supports partial content and ETags'
  
  // Generate an ETag (in production you might want to use a more sophisticated method)
  const etag = `"${Buffer.from(content).length.toString(16)}"`
  
  // Check if the client's cached version matches
  if (ifNoneMatch === etag) {
    return new NextResponse(null, {
      status: 304,
      headers: {
        'ETag': etag,
      }
    })
  }
  
  // Handle range requests (partial content)
  if (range) {
    const parts = range.replace('bytes=', '').split('-')
    const start = parseInt(parts[0], 10)
    const end = parts[1] ? parseInt(parts[1], 10) : content.length - 1
    const chunkLength = (end - start) + 1
    
    return new NextResponse(content.slice(start, end + 1), {
      status: 206,
      headers: {
        'Content-Range': `bytes ${start}-${end}/${content.length}`,
        'Accept-Ranges': 'bytes',
        'Content-Length': chunkLength.toString(),
        'Content-Type': 'text/plain',
        'ETag': etag,
      }
    })
  }
  
  // Return full content with ETag
  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain',
      'Accept-Ranges': 'bytes',
      'Content-Length': content.length.toString(),
      'ETag': etag,
    }
  })
} 