@Entity
@Table(name = "favorites")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(FavoriteId.class)
public class Favorite {
    @Id
    private Integer candidateId;

    @Id
    private Integer jobId;

    @Column(name = "created_at")
    private LocalDateTime createdAt;
}
