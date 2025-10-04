import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  organization: z.string().min(2),
  role: z.string().min(2),
  message: z.string().min(10),
  noPhi: z.boolean().refine((val) => val === true),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    const validatedData = contactSchema.parse(body);

    // In production, integrate with your CRM/email service
    // For now, just log and return success
    console.log("Contact form submission:", validatedData);

    // Example: Send to your backend, CRM, or email service
    // await sendToSalesforce(validatedData);
    // await sendEmailNotification(validatedData);

    return NextResponse.json(
      { message: "Thank you for your message. We'll be in touch soon!" },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
