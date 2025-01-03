export interface Course {
  id: string;
  title: string;
  description: string | null;
  price: number;
  instructor_id: string;
  created_at: string;
  updated_at: string;
}

export interface Lesson {
  id: string;
  course_id: string;
  title: string;
  content: string | null;
  order_index: number;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  user_id: string;
  course_id: string;
  purchased_at: string;
  amount_paid: number;
}