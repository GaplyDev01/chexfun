export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      games: {
        Row: {
          assigned: boolean | null
          black_player: string | null
          black_player_id: string | null
          created_at: string | null
          fen: string
          id: string
          ready_black: boolean | null
          ready_white: boolean | null
          status: string
          updated_at: string | null
          wager: number | null
          white_player: string | null
          white_player_id: string | null
          white_player_rating: number | null
        }
        Insert: {
          assigned?: boolean | null
          black_player?: string | null
          black_player_id?: string | null
          created_at?: string | null
          fen: string
          id?: string
          ready_black?: boolean | null
          ready_white?: boolean | null
          status: string
          updated_at?: string | null
          wager?: number | null
          white_player?: string | null
          white_player_id?: string | null
          white_player_rating?: number | null
        }
        Update: {
          assigned?: boolean | null
          black_player?: string | null
          black_player_id?: string | null
          created_at?: string | null
          fen?: string
          id?: string
          ready_black?: boolean | null
          ready_white?: boolean | null
          status?: string
          updated_at?: string | null
          wager?: number | null
          white_player?: string | null
          white_player_id?: string | null
          white_player_rating?: number | null
        }
        Relationships: []
      }
      moves: {
        Row: {
          created_at: string | null
          game_id: string | null
          id: string
          move: string
          move_number: number
        }
        Insert: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          move: string
          move_number: number
        }
        Update: {
          created_at?: string | null
          game_id?: string | null
          id?: string
          move?: string
          move_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "moves_game_id_fkey"
            columns: ["game_id"]
            referencedRelation: "games"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          created_at: string | null
          id: string
          last_seen: string | null
          losses: number | null
          rating: number | null
          total_pnl: string | null
          total_wagered: string | null
          wallet_address: string | null
          wins: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_seen?: string | null
          losses?: number | null
          rating?: number | null
          total_pnl?: string | null
          total_wagered?: string | null
          wallet_address?: string | null
          wins?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          last_seen?: string | null
          losses?: number | null
          rating?: number | null
          total_pnl?: string | null
          total_wagered?: string | null
          wallet_address?: string | null
          wins?: number | null
        }
        Relationships: []
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Views: {}
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Functions: {}
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    Enums: {}
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    CompositeTypes: {}
  }
}
