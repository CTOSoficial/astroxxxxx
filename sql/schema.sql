CREATE TABLE IF NOT EXISTS wishlists(
  user_id UUID,
  game_id UUID,
  created_at TIMESTAMP DEFAULT now(),
  PRIMARY KEY(user_id, game_id)
);
