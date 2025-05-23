import { NextRequest, NextResponse } from 'next/server'
import { prisma } from 'prisma/prisma-client'

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || ''

	const products = await prisma.productItem.findMany({
		where: {
			name: {
				contains: query,
				mode: 'insensitive',
			},
		},
	})

	return NextResponse.json(products)
}
