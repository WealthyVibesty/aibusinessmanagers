export interface ForumCategory {
  id: string;
  name: string;
  description: string | null;
  created_at: string;
  updated_at: string;
}

export interface ForumTopic {
  id: string;
  category_id: string | null;
  user_id: string | null;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface ForumReply {
  id: string;
  topic_id: string | null;
  user_id: string | null;
  content: string;
  created_at: string;
  updated_at: string;
}

export interface Profile {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string;
  created_at: string;
  updated_at: string;
}