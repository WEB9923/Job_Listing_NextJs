import {NextRequest, NextResponse} from "next/server";
import {prisma} from "@/lib/prisma";

interface Params {
	id: string;
}

export async function GET(req: NextRequest, {params}: {params: Params}): Promise<NextResponse<unknown>> {
	const {id} = params;
	try {
		const post = await prisma.jobPosting.findUnique({
			where: {id}
		});
		return new NextResponse(JSON.stringify(post), {status: 200});
	} catch (err) {
		return new NextResponse(JSON.stringify(
			{message: "something went wrong!"}
		), {
			status: 500}
		)
	}
}

